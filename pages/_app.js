import '../styles/globals.css';
import 'antd/dist/antd.css';
import CustomThemeProvider from '../containers/custom-theme-provider';
import Layout from '../containers/layout';

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
}

export default MyApp;
