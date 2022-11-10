import '../styles/globals.sass';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import MainLayout from '../layouts/mainLayout';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
