import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ServicesSection = ({ services }) => {
  return (
    <Box sx={{ py: 8, backgroundColor: (theme) => theme.palette.primary.main }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        Our services
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
                minWidth: '200px',
              }}
            >
              <img
                src={`https://picsum.photos/1080/800?random=${index + 3}`}
                alt={service.title}
                style={{ width: '100%', height: 'auto', mb: 2 }}
              />
              <Typography variant="h5" sx={{ mb: 2, marginTop: '16px' }}>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
