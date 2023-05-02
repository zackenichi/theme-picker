import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';

const HeroSection = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://picsum.photos/1080/800?random=1")',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }} className="hero">
          {title}
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
          {subtitle}
        </Typography>
        <Button variant="contained" color="primary">
          <Link href="#about" sx={{ color: '#FFFFFF' }}>
            Learn More
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
