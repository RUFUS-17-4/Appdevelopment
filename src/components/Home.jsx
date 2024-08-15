// src/components/Home.js

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from '@mui/material'; // Added Grid and Paper imports
import { styled } from '@mui/system';
import WebFont from 'webfontloader';
import Footer from './Footer';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

const Title = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
});

const Home = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [signedUpUsers, setSignedUpUsers] = useState([]); 

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:400,700']
      }
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginOpen = () => {
    setOpen(true);
  };

  const handleLogin = (email, password) => {
    const user = signedUpUsers.find(user => user.email === email && user.password === password);
    if (user) {
      setUser(user);
      handleClose();
    } else {
      alert('You need to sign up first or incorrect email/password');
    }
  };

  const handleSignup = async (username, email, password) => {
    const newUser = { username, email, password };
    setSignedUpUsers([...signedUpUsers, newUser]);
    const response = await axios.post("http://localhost:8081/api/auth/signup", newUser);
    console.log(response);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className='bg'
      style={{
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className='navbar'>
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
          <Toolbar>
            <EnergySavingsLeafIcon sx={{ paddingTop: 0.5, fontSize: 40, color: "green" }} />
            <Typography className='titlehead' variant="h6" style={{ flexGrow: 1, fontFamily: "Poppins, sans-serif", fontSize: 24, fontWeight: 700, color: "green" }}>
              FarmEasy
            </Typography>
            <Button color="inherit" onClick={handleLoginOpen}>
              {user ? "Logout" : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '80vh', padding: '2rem 0' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            justifyContent: 'center',
            padding: 3,
            width: '50%',
          }}
        >
          <Title variant="h2" component="h1" sx={{ color: "white", paddingBottom: "25px" }}>
            Let’s grow big happy plants together.
          </Title>

          <Typography variant="h5" sx={{ color: "white" }} gutterBottom>
            Everyone can have a green thumb. Let me show you how!
          </Typography>
          <Link to="./LandManagement">
            <Button variant="contained" color="success" size="large" sx={{ mt: 3, padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: 2 }}>
              Plant - Now
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '50%',
            height: '100%',
            backgroundImage: 'url()', // Replace with your image URL
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        ></Box>
      </Container>
      <Footer />
      <LoginForm
        open={open}
        handleClose={handleClose}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </div>
  );
};

export default Home;
