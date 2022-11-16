import { ColorModeScript } from '@chakra-ui/react';
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

import theme from '../styles/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head />
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
