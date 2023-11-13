import React, { Children } from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { AppRegistry } from 'react-native';

class Document extends NextDocument {
  static async getInitialProps({ renderPage }: {renderPage: any}) {
    AppRegistry.registerComponent('Main', () => Main);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const page = await renderPage();
    const styles = [
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head />
        <body style={{ height: '100%', overflow: 'hidden' }}>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document
