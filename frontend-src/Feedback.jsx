import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Rating, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const BackgroundContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)', // Gradient background
});

const FormContainer = styled(Container)({
  padding: '2.5rem',
  backgroundColor: '#ffffff', // White background for the form
  borderRadius: '24px', // More rounded corners
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)', // Softer shadow
});

const StyledButton = styled(Button)({
  marginTop: '1.5rem',
  backgroundColor: '#00796b',
  color: '#fff',
  padding: '0.75rem 1.5rem', // Larger padding
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#004d40',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', // Larger shadow on hover
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
  },
  '& .MuiInputLabel-outlined': {
    fontSize: '1rem',
  },
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD700', // Gold color for filled stars
  },
  '& .MuiRating-iconHover': {
    color: '#FFC107', // Darker gold on hover
  },
});

const API_BASE_URL = 'http://localhost:8081/api/feedback';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0,
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, rating: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_BASE_URL, formData)
      .then((response) => {
        setFeedbackList(response.data);
        setFormData({ name: '', email: '', feedback: '', rating: 0 });
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <BackgroundContainer>
      <FormContainer maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
          We Value Your Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                id="email"
                name="email"
                label="Your Email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                id="feedback"
                name="feedback"
                label="Your Feedback"
                variant="outlined"
                multiline
                rows={4}
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="legend">Your Rating</Typography>
              <StyledRating
                name="rating"
                value={formData.rating}
                onChange={handleRatingChange}
                precision={1}
                size="large"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" fullWidth variant="contained">
                Submit Feedback
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default Feedback;
