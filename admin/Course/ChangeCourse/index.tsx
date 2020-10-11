import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import cn from "classnames";

import OnCoursesPage from "./OnCoursesPage";
import Landing from "./Landing";
import Benefits from "./Benefits";
import Discounts from "./Discounts";
import Video from "./Video";
import Test from "./Test";

import { Container } from "./styles";
import { allQueryFragments, allFragments } from "graphql/queries";
import { Loading } from "admin/components/atoms";



export const COURSE_BY_NAME = gql`
  query CourseByNameQuery($href: String!) {
    courseByName(href: $href){
      id
      href
      gradient
      name
      description
      image {
        alt
        src
      }
      ${allQueryFragments}
    }
  }
  ${allFragments}
`;

const ChangeCourse = ({ courseHref }) => {
  const [selected, setSelected] = useState("On Courses page");
  const { data, loading , refetch} = useQuery(COURSE_BY_NAME, {
    variables: { href: courseHref },
  });

  if (!data) return <Loading />;

  const { courseByName: courseData } = data;

  const sections = [
    { title: "On Courses page", isActive: true, component: OnCoursesPage },
    { title: "Landing", isActive: !!courseData.landing, component: Landing  },
    { title: "Benefits", isActive: !!courseData.benefits, component: Benefits  },
    { title: "Discounts", isActive: !!courseData.discounts, component: Discounts  },
    { title: "Instructors", isActive: !!courseData.instructors, component: Test  },
    { title: "WhoCanAttend", isActive: !!courseData.whoCanAttend, component: () => <div></div>  },
    { title: "Information", isActive: !!courseData.information, component: () => <div></div>  },
    { title: "Opportunities", isActive: !!courseData.opportunities, component: () => <div></div>  },
    { title: "Syllabus", isActive: !!courseData.syllabus, component: () => <div></div>  },
    { title: "Video", isActive: !!courseData.video, component: Video  },
    { title: "Additional", isActive: !!courseData.additional, component: () => <div></div>  },
    { title: "Portfolio", isActive: !!courseData.portfolio, component: () => <div></div>  },
  ];

  const Component = sections.find(el => el.title === selected).component

  return (
    <Container>
      <div className="menu">
        <ul>
          {sections.map(({ title, isActive }) => (
            <li
              className={cn({ "not-ctive": !isActive, current: title === selected })}
              key={title}
              onClick={() => isActive && setSelected(title)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <Component data={courseData} refetch={refetch} queryloading={loading}/>
    </Container>
  );
};

export default ChangeCourse;
