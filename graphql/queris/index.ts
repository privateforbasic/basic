export * from "./layout";
export * from "./home";
export * from "./coursesPage";
export * from "./courses";

import { gql } from "@apollo/client";
import { layoutQuery } from "./layout";
import { coursesPageQuery } from "./coursesPage";
// import { CoursesQuery } from "./courses";
import { homeQuery } from "./home";

export const RootQuery = gql`
  query {
    ${layoutQuery}
    ${homeQuery}
    ${coursesPageQuery}
  }
`;
