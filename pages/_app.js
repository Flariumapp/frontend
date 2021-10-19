import '../styles/globals.css';
import 'antd/dist/antd.css';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomThemeProvider from '../containers/custom-theme-provider';
import Layout from '../containers/layout';
import ReduxProvider from '../store';
import { Provider } from 'next-auth/client';
import NProgress from 'nprogress';
// import TopProgressBar from '../components/top-progress-bar';

function MyApp({ Component, pageProps }) {
  // const TopProgressBar = dynamic(
  //   () => {
  //     return import('../components/top-progress-bar');
  //   },
  //   { ssr: false },
  // );

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