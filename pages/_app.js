import '../styles/globals.css';
import 'antd/dist/antd.css';
// import 'nprogress/nprogress.css';
import Router from 'next/router';
import CustomThemeProvider from '../containers/custom-theme-provider';
import Layout from '../containers/layout';
import ReduxProvider from '../store';
import { Provider } from 'next-auth/client';
import NProgress from 'nprogress';
import TopProgressBar from '../components/top-progress-bar';
import theme from '../styles/theme';

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider>
        <CustomThemeProvider>
          <TopProgressBar color={theme.primary} height={'3'} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
      </ReduxProvider>
    </Provider>
  );
}

export default MyApp;