import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { AlignHorizontalCenterSharp } from '@mui/icons-material';
const ThemeSwitcher = ({ themes }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <div style={{ backgroundColor: currentTheme.background, color: currentTheme.text}}>
      <Button type="submit"
      variant="contained"
      color="success"
      sx={{ mt: 3, mb: 2 }} onClick={switchTheme}>Switch Theme</Button>
    </div>
  );
};

export default ThemeSwitcher;