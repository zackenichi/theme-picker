import React from 'react';
import {
  Menu,
  // Slider,
  Typography,
  // Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const StyleMenu = ({
  open,
  onClose,
  onChangeTitleColor,
  onChangeSubtitleColor,
  onChangeBodyColor,
  onChangeAccentColor,
  onChangeServicesColor,
  onChangeFontSize,
  onResetStyles,
  titleColor,
  subtitleColor,
  bodyColor,
  accentColor,
  servicesColor,
  anchorEl,
}) => {
  // const marks = [
  //   { value: 12, label: '12' },
  //   { value: 16, label: '16' },
  //   { value: 20, label: '20' },
  //   { value: 24, label: '24' },
  // ];

  const headings = { color: 'black', fontSize: '16px' };
  const settings = { cursor: 'pointer' };

  const handleTitleColorChange = (event) => {
    if (event.target && event.target.value) {
      onChangeTitleColor(event.target.value);
    }
  };
  const handleSubtitleColorChange = (event) => {
    if (event.target && event.target.value) {
      onChangeSubtitleColor(event.target.value);
    }
  };

  const handleBodyColorChange = (event) => {
    if (event.target && event.target.value) {
      onChangeBodyColor(event.target.value);
    }
  };

  const handleAccentColorChange = (event) => {
    if (event.target && event.target.value) {
      onChangeAccentColor(event.target.value);
    }
  };

  const handleServicesColorChange = (event) => {
    if (event.target && event.target.value) {
      onChangeServicesColor(event.target.value);
    }
  };

  // const handleFontSizeChange = (event, value) => {
  //   onChangeFontSize(value + 'px');
  // };

  return (
    <Menu
      anchorEl={anchorEl}
      id="style-menu"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        marginTop: '-10vh',
        textAlign: 'center',
      }}
      open={open}
      onClose={onClose}
    >
      {/* <Typography sx={{ ml: 2, mt: 1 }}>Font Family:</Typography>
      <MenuItem>
        <Select
          value={fontFamily}
          onChange={handleFontFamilyChange}
          style={{ fontFamily: fontFamily }}
        >
          <MenuItem value="Roboto">Roboto</MenuItem>
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
        </Select>
      </MenuItem>
      <Typography sx={{ ml: 2 }}>Font Size:</Typography>
      <MenuItem>
        <Slider
          value={parseInt(fontSize)}
          onChange={handleFontSizeChange}
          aria-label="font-size-slider"
          step={1}
          marks={marks}
          min={12}
          max={24}
          valueLabelDisplay="auto"
          sx={{ width: '80%', ml: 2 }}
        />
      </MenuItem> */}
      <Typography sx={headings}>Title</Typography>
      <MenuItem>
        <input
          type="color"
          value={titleColor}
          onChange={handleTitleColorChange}
          style={settings}
        />
      </MenuItem>
      <Typography sx={headings}>Subtitle</Typography>
      <MenuItem>
        <input
          type="color"
          value={subtitleColor}
          onChange={handleSubtitleColorChange}
          style={settings}
        />
      </MenuItem>
      <Typography sx={headings}>Body</Typography>
      <MenuItem>
        <input
          type="color"
          value={bodyColor}
          onChange={handleBodyColorChange}
          style={settings}
        />
      </MenuItem>
      <Typography sx={headings}>Services</Typography>
      <MenuItem>
        <input
          type="color"
          value={servicesColor}
          onChange={handleServicesColorChange}
          style={settings}
        />
      </MenuItem>
      <Typography sx={headings}>Accent</Typography>
      <MenuItem>
        <input
          type="color"
          value={accentColor}
          onChange={handleAccentColorChange}
          style={settings}
        />
      </MenuItem>
      <Typography sx={headings}>Size</Typography>
      <MenuItem>
        <IconButton onClick={() => onChangeFontSize('increase')}>
          <Add />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton onClick={() => onChangeFontSize('decrease')}>
          <Remove />
        </IconButton>
      </MenuItem>

      <Button onClick={onResetStyles} sx={{ fontSize: '16px' }}>
        Reset
      </Button>
    </Menu>
  );
};

export default StyleMenu;
