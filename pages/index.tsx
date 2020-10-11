import Head from "next/head";
import { useApolloClient } from "@apollo/client";

import { HomeQuery } from "graphql/queries";
import {
  Landing,
  Advantages,
  Companies,
  Video,
  Experience,
  Feedback,
  Blog,
} from "@pages/home";
import { initApolloWithAllQuery } from "utils/initApolloWithAllQuery";

const Home = ({}) => {
  const apolloClient = useApolloClient();

  const {
    home: {
      landing,
      advantages,
      companies,
      video,
      experiences,
      feedbacks,
      blog,
    },
  } = apolloClient.readQuery({ query: HomeQuery });

  return (
    <>
      <Head>
        <title>Basic IT Center</title>
        <meta property="og:title" content="Basic IT Center" />
        <meta property="og:url" content="https://www.basic.am" />
      </Head>
      <Landing data={landing} />
      <Advantages data={{ advantages }} />
      <Companies data={companies} />
      <Video data={video} />
      <Experience data={{ experiences }} />
      <Feedback data={feedbacks} />
      <Blog data={blog} />
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const initialApolloState = await initApolloWithAllQuery();

  return {
    props: {
      initialApolloState,
      lang: "hy",
    },
  };
};

export default Home;
