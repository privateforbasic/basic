import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import { CourseByNameQuery } from "graphql/queris";

import {
  Landing,
  Benefits,
  Discounts,
  Instructors,
  WhoCanAttend,
  Information,
  Opportunities,
  Syllabus,
  Video,
  Additional,
  Portfolio,
} from "@pages/course";
import { GlobalStyles } from "@pages/course/styles";
import { initApolloWithAllQuery } from "utils/initApolloWithAllQuery";
import { useApolloClient } from "@apollo/client";

const Courses = ({ course }) => {
  const apolloClient = useApolloClient();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  const {
    courseByName: {
      image,
      landing,
      benefits,
      discounts,
      instructors,
      whoCanAttend,
      information,
      opportunities,
      syllabus,
      video,
      portfolio,
      gradient,
    },
  } = apolloClient.readQuery({
    query: CourseByNameQuery,
    variables: { href: course },
  });

  return (
    <>
      <Head>
        <title>Basic IT Center</title>
        <meta property="og:title" content="Basic IT Center" />
        <meta property="og:url" content="https://www.basic.am" />
      </Head>

      <GlobalStyles gradient={gradient} />

      <Landing data={{ landing, image, gradient }} />
      {benefits && <Benefits data={benefits} />}
      {discounts && <Discounts data={discounts} gradient={gradient} />}
      {Instructors && <Instructors data={instructors} />}
      {whoCanAttend && <WhoCanAttend data={whoCanAttend} />}
      {information && <Information data={information} />}
      {opportunities && <Opportunities data={opportunities} />}
      {syllabus && <Syllabus data={syllabus} />}
      {video && <Video data={video} />}
      <Additional data={{}} />
      {portfolio && <Portfolio data={portfolio} />}
    </>
  );
};

export const getServerSideProps = async ctx => {
  const initialApolloState = await initApolloWithAllQuery(CourseByNameQuery, {
    href: ctx.params.course,
  });

  // if (ctx.params.course !== "react") {
  //   const { res } = ctx;
  //   res.setHeader("location", "/");
  //   res.statusCode = 302;
  //   res.end();
  // }

  return {
    props: {
      initialApolloState,
      course: ctx.params.course,
      lang: "hy",
      // gradient: courseByTitle.gradient,
    },
  };
};

export default Courses;
