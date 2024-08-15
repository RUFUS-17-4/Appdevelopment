import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Pinterest, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)({
  backgroundColor: '#333',
  color: 'white',
  padding: '40px 0',
});

const FooterContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Logo = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '20px', // Add margin to space out the logo and social icons
});

const SocialIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px', // Add margin to space out the social icons and copyright text
});

const Copyright = styled(Typography)({
  marginTop: '20px',
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  width: '100%',
});

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer maxWidth="lg">
        <Logo>FARMEASY</Logo>
        <SocialIcons>
          <IconButton color="inherit" href="#" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="YouTube">
            <YouTube />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="Pinterest">
            <Pinterest />
          </IconButton>
          <IconButton color="inherit" href="#" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
        </SocialIcons>
        <Copyright>
          Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
        </Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
