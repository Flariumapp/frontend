import '../styles/globals.css';
import 'antd/dist/antd.css';
import CustomThemeProvider from '../containers/custom-theme-provider';
import Layout from '../containers/layout';
import ReduxProvider from '../store';
import buildClient from './api/build-client';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider>
        <CustomThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;