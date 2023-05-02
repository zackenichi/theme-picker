import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container sx={{ mt: 'auto', py: 2 }}>
      <Typography variant="h6" align="center">
        © 2023 Dynamic Website Styles. All rights reserved. | ZacKenichi{' '}
        <a
          href="https://github.com/zackenichi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Typography>
    </Container>
  );
}

export default Footer;
