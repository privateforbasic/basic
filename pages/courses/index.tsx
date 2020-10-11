import Head from "next/head";
import { useApolloClient } from "@apollo/client";

import { CoursesPageQuery } from "graphql/queris";
import { Benefits, Filter, Faq } from "@pages/courses";
import { initApolloWithAllQuery } from "utils/initApolloWithAllQuery";

const Courses = () => {
  const apolloClient = useApolloClient();

  const {
    coursesPage: { benefits, faq, filters },
    courses,
  } = apolloClient.readQuery({
    query: CoursesPageQuery,
  });

  return (
    <>
      <Head>
        <title>Basic IT Center</title>
        <meta property="og:title" content="Basic IT Center" />
        <meta property="og:url" content="https://www.basic.am" />
      </Head>
      <Benefits data={benefits} />
      <Filter data={{ filters, courses }} />
      <section>
        <a href="#" className="sign-up">
          Չգիտես ինչի՞ց սկսել
        </a>
      </section>
      <Faq data={faq} />
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

export default Courses;
