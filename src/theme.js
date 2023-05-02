import { createTheme } from '@mui/material/styles';
import defaultStyles from './defaults.js';

export const createCustomTheme = (
  fontSize,
  titleColor,
  subtitleColor,
  bodyColor,
  servicesColor,
  accentColor
) => {
  return createTheme({
    palette: {
      primary: {
        main: accentColor,
      },
      secondary: {
        main: '#e65100',
      },
      background: {
        default: '#f8f8f8',
        paper: '#fff',
      },
    },
    typography: {
      //   fontSize: fontSize,

      h1: {
        fontSize: `${defaultStyles.h1Size + fontSize / 16}rem`, // convert to rem units
        fontWeight: 500,
        color: titleColor,
      },
      h2: {
        fontSize: `${defaultStyles.h2Size + fontSize / 16}rem`,
        fontWeight: 500,
        color: servicesColor,
      },

      h3: {
        fontSize: `${defaultStyles.h3Size + fontSize / 16}rem`,
        fontWeight: 500,
        color: subtitleColor,
      },

      h5: {
        fontSize: `${defaultStyles.h5Size + fontSize / 16}rem`,
        fontWeight: 500,
        color: servicesColor,
      },

      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
      body1: {
        fontSize: `${defaultStyles.body1Size + fontSize / 16}rem`,
        fontWeight: 400,
        color: bodyColor,
      },
      body2: {
        fontSize: `${defaultStyles.body2Size + fontSize / 16}rem`,
        fontWeight: 400,
        color: servicesColor,
      },
      button: {
        fontSize: `${defaultStyles.body1Size + fontSize / 16}rem`,
        fontWeight: 500,
        textTransform: 'none',
      },
    },
    components: {
      MuiFab: {
        styleOverrides: {
          root: {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#1E88E5', // Set a solid background color
            color: '#424242', // Set a dark color for the icon
            '&:hover': {
              backgroundColor: '#1565C0', // Set a darker background color on hover
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: accentColor,
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            '&$selected': {
              backgroundColor: '#e65100',
            },
          },
          selected: {},
        },
      },
    },
  });
};
