import { useApolloClient, useQuery } from "@apollo/client";
import { useLang } from "hooks/useLang";
import styled from "styled-components";
import { LayoutQuery } from "graphql/queries";
import theme from "@styles/theme";
import { memo } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import { useRouter } from "next/router";

const StyledMain = styled.main`
  position: relative;
  display: grid;
  color: #fff;
  text-align: center;

  ${theme.breakpoints.down("md")} {
    justify-content: center;
  }

  & > section {
    & > section {
      padding: 0 35px;

      ${theme.breakpoints.down("md")} {
        padding-left: 2.5%;
        padding-right: 2.5%;
      }

      ${theme.breakpoints.down("xs")} {
        padding-left: 5%;
        padding-right: 5%;
      }
    }

    & > h2 {
      padding-bottom: 40px;
      display: inline-block;

      ${theme.breakpoints.down("xs")} {
        padding-left: 5%;
        padding-right: 5%;
      }
    }
  }

  h2 {
    text-align: center;
  }

  article {
    img {
      height: 110px;
      margin: auto;

      ${theme.breakpoints.down(600)} {
        height: 100px;
      }
    }
  }
`;

const Layout = ({ children, lang }) => {
  useLang(lang);
  const apolloClient = useApolloClient();
  const route = useRouter();
  if (route.pathname === "/admin") return children;
  
  const {
    layout: { header },
  } = apolloClient.readQuery({ query: LayoutQuery });

  return (
    <>
      <Header data={header} />
      <StyledMain>
        <Menu />
        {children}
      </StyledMain>
      <Footer />
      <footer></footer>
    </>
  );
};

export default memo(Layout);
