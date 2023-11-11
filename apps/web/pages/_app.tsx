import Head from 'next/head';
import App, {AppContext, AppProps} from "next/app";

function WebApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

WebApp.getInitialProps = async (appContext: AppContext) => {
  const defaultProps = await App.getInitialProps(appContext);
  return {
    ...defaultProps,
    pageProps: {
      ...defaultProps.pageProps,
    },
  };
}
export default WebApp;
