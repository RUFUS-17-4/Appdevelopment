import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import './Maintenance.css'; // Import the CSS file

const Maintenance = () => {
  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom className="headerm">
        Beginner’s Guide to Setting Up an Agricultural Environment
      </Typography>
      <Paper elevation={3} className="paperm">
        <Typography variant="h6" gutterBottom>
          1. Assess Your Environment
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemText primary="Climate and Weather:" secondary="Understand the local climate (temperature, rainfall, humidity) as it affects crop selection. Check historical weather patterns and consider using weather forecasts to plan activities." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Soil Quality:" secondary="Conduct soil tests to determine soil pH, nutrient levels, and texture. Identify soil types (loamy, sandy, clayey) and their suitability for different crops." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Water Availability:" secondary="Assess the availability of water sources (rainwater, wells, irrigation systems). Plan for irrigation systems if needed." />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} className="paperm">
        <Typography variant="h6" gutterBottom>
          2. Choose Your Crops
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemText primary="Select Crops:" secondary="Choose crops suitable for your climate and soil type. Consider market demand and personal preferences." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Variety Selection:" secondary="Opt for crop varieties that are disease-resistant and high-yielding." />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} className="paperm">
        <Typography variant="h6" gutterBottom>
          3. Prepare the Land
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemText primary="Clearing and Tilling:" secondary="Clear the land of debris and weeds. Use appropriate tilling methods to prepare the soil for planting." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Soil Enrichment:" secondary="Add organic matter (compost, manure) to improve soil fertility. Use fertilizers and soil conditioners based on soil test results." />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} className="paperm">
        <Typography variant="h6" gutterBottom>
          4. Set Up Irrigation
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemText primary="Choose Irrigation Methods:" secondary="Decide between drip irrigation, sprinkler systems, or other methods based on your needs and resources." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Install and Test:" secondary="Install the chosen irrigation system and test it to ensure proper coverage and efficiency." />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} className="paperm">
        <Typography variant="h6" gutterBottom>
          5. Maintenance and Care
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemText primary="Regular Monitoring:" secondary="Monitor the health of crops regularly for pests, diseases, and nutrient deficiencies." />
          </ListItem>
          <ListItem className="list-item">
            <ListItemText primary="Timely Interventions:" secondary="Address any issues promptly to ensure healthy growth and high yields." />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Maintenance;
