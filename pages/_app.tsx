import { AppContextType } from "next/dist/next-server/lib/utils";
// import NextNprogress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apolloClient";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import NextApp from "next/app";
import Head from "next/head";

// layouts
import AdminLayout from "admin";
import SiteLayout from "components/Layout";

import GlobalStyles from "@styles/GlobalStyles";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
/**
 * Layout component
 */
const Layout = ({ children, lang, ...rest }) => {
  const router = useRouter();
  const isAdmin = router.pathname.match("admin");

  const Layouts = {
    siteLayout: SiteLayout,
    adminLaout: AdminLayout,
  };

  const Layout = Layouts[isAdmin ? "adminLaout" : "siteLayout"];

  return (
    <Layout lang={lang} {...rest}>
      {children}
    </Layout>
  );
};

/**
 * App component
 */
const App = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      /> */}
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Layout lang={pageProps.lang}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

App.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps }
}

export default App;
