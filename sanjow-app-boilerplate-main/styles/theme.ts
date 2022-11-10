import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    sanjow: {
      100: '#ff581a',
      200: '#FF4500',
      300: '#FF4500',
      400: '#FF4500',
      500: '#FF4500',
      600: '#FF4500',
      700: '#FF4500',
      800: '#FF4500',
      900: '#FF4500',
    },
  },
});

export default theme;
