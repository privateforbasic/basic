import { gql } from "apollo-server-micro";

import { commonTypeDefs } from "./common";
import { layoutTypeDefs } from "./Layout";
import { homeTypeDefs } from "./Home";
import { coursesPageTypeDefs } from "./CoursesPage";
import { courseTypeDefs, courseMutationTypeDefs } from "./Course";

const queryTypeDef = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input FileUpload {
    path: String!
    file: Upload!
  }

  type Query {
    layout: Layout!
    home: Home!
    coursesPage: CoursesPage!
    courses: [Course!]!
    courseByName(href: String!): Course!

    uploads: [File]
  }

  type Mutation {
    # common
    changeCourseSomeField(input: CourseSomeFieldInput!): String!
    deleteFiledFromArray(input: DeleteFieldFromArrayInput!): String!
    # on course page
    changeCourseOnCoursesPage(input: OnCoursesPageInput!): String!
    changeCourseLanding(input: CourseLandingInput!): String!
    # benefit
    changeCourseBenefit(input: CourseBenefitInput!): String!
    addCourseBenefit(input: CourseBenefitInput!): String!
    # discount
    changeCourseDiscount(input: CourseDiscountInput!): String!
    addCourseDiscount(input: CourseDiscountInput!): String!

    changeCourseVideo(input: CourseVideoInput!): String!

    # singleUpload(file: Upload!): File!
    uploadFile(input: FileUpload!): File!
  }
`;

export const typeDefs = [
  commonTypeDefs,
  layoutTypeDefs,
  homeTypeDefs,
  coursesPageTypeDefs,
  courseTypeDefs,
  courseMutationTypeDefs,
  queryTypeDef,
];
