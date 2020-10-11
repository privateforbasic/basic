import Head from "next/head";

import { initializeApollo } from "src/apolloClient";
import { HomeQuery } from "graphql/queris";
import {
  Landing,
  Advantages,
  Companies,
  Video,
  Experience,
  Feedback,
  Blog,
} from "@pages/home";

const Home = ({ homeData }) => {
  const {
    landing,
    advantages,
    companies,
    video,
    experiences,
    feedbacks,
    blog,
  } = homeData;

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
  const apolloClient = initializeApollo();

  const {
    data: { layout, home },
  } = await apolloClient.query({
    query: HomeQuery,
  });

  const initialApolloState = apolloClient.cache.extract();

  return {
    props: {
      initialApolloState,
      layoutData: layout,
      homeData: home,
    },
  };
};

export default Home;
