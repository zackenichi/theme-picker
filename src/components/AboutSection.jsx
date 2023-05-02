import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutSection = ({ title, description }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }} id="about">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <img
            src={`https://picsum.photos/1080/800?random=2`}
            alt="About us"
            style={{ width: '50%', height: 'auto', borderRadius: '50%' }}
          />
        </Box>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutSection;
