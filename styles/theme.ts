import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme({
  config,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  colors: {
    sanjow: {
      100: '#FFF',
      200: '#000000',
      300: '#FFF7',
      400: '#FF4500',
      500: '#343633',
      600: '#FF4500',
      700: '#FF4500',
      800: '#FF4500',
      900: '#FF4500',
    },
  },
});

export default theme;
