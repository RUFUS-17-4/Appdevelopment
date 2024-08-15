import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Weather.css";
import { Container, Typography, CircularProgress, Grid, Paper } from '@mui/material';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  // List of regions to randomly assign to weather data entries
  const regions = ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            lat: 11.127123,
            lon: 78.656891,
            appid: '8af40eb2b2bbd78f5e1c250532896dfc',
            units: 'metric'
          }
        });

        // Parsing response to get relevant data for display
        const parsedData = response.data.list.map((entry, index) => ({
          date: entry.dt_txt,
          temperature: entry.main.temp,
          condition: entry.weather[0].description,
          nearestCity: regions[index % regions.length] // Assign a region based on index
        }));

        setWeatherData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <Container maxWidth="lg" className='weather-container'>
      <Typography variant="h4" gutterBottom className='weather-title'>
        Weather Forecast for Tamil Nadu Regions
      </Typography>
      {loading ? (
        <CircularProgress className='loading-spinner' />
      ) : (
        <Grid container spacing={3}>
          {weatherData.map((entry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className='weather-card' elevation={3}>
                <Typography variant="h6" className='weather-date'>
                  {new Date(entry.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" className='weather-temperature'>
                  {`Temperature: ${entry.temperature.toFixed(1)}°C`}
                </Typography>
                <Typography variant="body1" className='weather-condition'>
                  {`Condition: ${entry.condition.charAt(0).toUpperCase() + entry.condition.slice(1)}`}
                </Typography>
                <Typography variant="body1" className='weather-nearest-city'>
                  {`Nearest City: ${entry.nearestCity}`}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Weather;
