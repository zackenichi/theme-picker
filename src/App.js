import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import { createCustomTheme } from './theme';
import { Settings, Close } from '@mui/icons-material';
import { Fab } from '@mui/material';
import StyleMenu from './components/StyleMenu';
import Footer from './components/Footer';
import defaultStyles from './defaults.js';

const services = [
  {
    imageSrc: 'https://picsum.photos/seed/1/400',
    title: 'Service 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex ut magna vestibulum, vel congue sem finibus.',
  },
  {
    imageSrc: 'https://picsum.photos/seed/2/400',
    title: 'Service 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex ut magna vestibulum, vel congue sem finibus.',
  },
  {
    imageSrc: 'https://picsum.photos/seed/3/400',
    title: 'Service 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex ut magna vestibulum, vel congue sem finibus.',
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [fontSize, setFontSize] = useState(0);
  // const [fontColor, setFontColor] = useState('#FF0000');
  const [titleColor, setTitleColor] = useState(defaultStyles.titleColor);
  const [subtitleColor, setSubtitleColor] = useState(
    defaultStyles.subtitleColor
  );
  const [bodyColor, setBodyColor] = useState(defaultStyles.bodyColor);
  const [servicesColor, setServicesColor] = useState(
    defaultStyles.servicesColor
  );
  const [accentColor, setAccentColor] = useState(defaultStyles.accentColor);

  const theme = createCustomTheme(
    fontSize,
    titleColor,
    subtitleColor,
    bodyColor,
    servicesColor,
    accentColor
  );

  const handleTitleColorChange = (color) => {
    setTitleColor(color);
  };
  const handleSubtitleColorChange = (color) => {
    setSubtitleColor(color);
  };

  const handleBodyColorChange = (color) => {
    setBodyColor(color);
  };

  const handleAccentColorChange = (color) => {
    setAccentColor(color);
  };
  const handleServicesColorChange = (color) => {
    setServicesColor(color);
  };

  const handleChangeFontSize = (operation) => {
    if (operation === 'increase') {
      setFontSize((prevFontSize) => prevFontSize + 1);
    } else if (operation === 'decrease') {
      setFontSize((prevFontSize) => prevFontSize - 1);
    }
  };

  const handleResetStyles = () => {
    setTitleColor(defaultStyles.titleColor);
    setSubtitleColor(defaultStyles.subtitleColor);
    setBodyColor(defaultStyles.bodyColor);
    setServicesColor(defaultStyles.servicesColor);
    setAccentColor(defaultStyles.accentColor);
    setFontSize(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeroSection
        title="Welcome to my website"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex ut magna vestibulum."
      />
      <AboutSection description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod ex ut magna vestibulum, vel congue sem finibus. Fusce rhoncus leo sit amet mauris maximus, eu mollis dolor ultricies. Nullam et nisi vitae magna venenatis hendrerit ut eget risus. In pharetra lacus ac nunc interdum, id lacinia magna gravida. Sed sit amet velit vel felis rutrum fermentum ac eget est. Integer fringilla fermentum elementum." />
      <ServicesSection services={services} />
      <Fab
        color="primary"
        onClick={(event) => {
          setOpen((prev) => !prev);
          setAnchorEl(event.currentTarget);
        }}
        sx={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
      >
        {open ? <Close /> : <Settings />}
      </Fab>
      <StyleMenu
        open={open}
        onClose={() => setOpen(false)}
        onResetStyles={handleResetStyles}
        onChangeFontSize={handleChangeFontSize}
        onChangeTitleColor={handleTitleColorChange}
        onChangeSubtitleColor={handleSubtitleColorChange}
        onChangeBodyColor={handleBodyColorChange}
        onChangeAccentColor={handleAccentColorChange}
        onChangeServicesColor={handleServicesColorChange}
        titleColor={titleColor}
        subtitleColor={subtitleColor}
        bodyColor={bodyColor}
        accentColor={accentColor}
        servicesColor={servicesColor}
        anchorEl={anchorEl}
      />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
