import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { auth } from './Firebase'; // Import auth from your firebaseConfig file
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginForm = ({ open, handleClose, handleLogin, handleSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async () => {
    if (isLogin) {
      handleLogin(email, password);
    } else {
      await handleSignup(username, email, password);
      setIsLogin(true); // Switch to login form after sign up
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google sign-in successful:', user);
      handleClose(); // Close the dialog
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      sx={{ '& .MuiDialog-paper': { padding: '40px', borderRadius: '15px', width: '450px', maxWidth: '100%' } }}
    style={{backgroundColor:"sky blue"}}>
      <DialogTitle sx={{ textAlign: 'center', paddingTop: '10px', position: 'relative' }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          {isLogin ? 'Login to FarmEasy' : 'Create Your Account'}
        </span>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '20px' }}>
        {!isLogin && (
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <TextField
          autoFocus={isLogin}
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: 'column', gap: '12px', padding: '20px' }}>
        <Button 
          onClick={handleSubmit} 
          sx={{ 
            width: '100%', 
            fontSize: '16px', 
            textTransform: 'none', 
            backgroundColor: '#1976d2', 
            color: '#fff', 
            borderRadius: '8px', 
            '&:hover': { backgroundColor: '#1565c0' } 
          }}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
        <Button 
          onClick={handleGoogleSignIn} 
          sx={{ 
            width: '100%', 
            fontSize: '16px', 
            textTransform: 'none', 
            backgroundColor: '#db4437', 
            color: '#fff', 
            borderRadius: '8px', 
            '&:hover': { backgroundColor: '#c23321' } 
          }}
        >
          {isLogin ? 'Login with Google' : 'Sign Up with Google'}
        </Button>
        <Button 
          onClick={handleToggle} 
          sx={{ 
            width: '100%', 
            fontSize: '14px', 
            textTransform: 'none', 
            borderRadius: '8px', 
            color: '#1976d2' 
          }}
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginForm;
