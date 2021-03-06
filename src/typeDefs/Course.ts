import { gql } from "apollo-server-micro";

export const courseType = gql`
  type Portfolio {
    image: Image!
    link: Link!
    texts: [String!]!
  }

  type VideoCourse {
    href: String!
    title: String!
  }

  type CoursePhaseDesc {
    id: ID!
    title: String!
  }

  type CoursePhase {
    id: ID!
    title: String!
    list: [CoursePhaseDesc!]!
  }

  type Syllabus {
    title: String!
    sections: [CoursePhase!]!
    link: Link!
  }

  type Opportunities {
    title: String!
    articles: [Article!]!
  }

  type InfoText {
    id: ID!
    title: String!
  }

  type DeadlineInfo {
    id: ID!
    title: String!
  }

  type Information {
    texts: [DeadlineInfo!]!
  }

  type WhoCanAttend {
    title: String!
    texts: [InfoText!]!
  }

  type Instructor {
    id: ID!
    image: Image!
    href: String!
    title: String!
    description: String!
  }

  type Instructors {
    title: String!
    peoples: [Instructor!]!
  }

  type Discount {
    id: ID!
    percentage: String!
    description: String!
    dataAosDelay: String!
  }

  type DiscountsCourse {
    title: String!
    articles: [Discount!]!
  }

  type BenefitsCourse {
    id: ID!
    image: Image!
    title: String!
    description: String!
  }

  type LandingCourse {
    name: String!
    description: String!
    signUp: Link!
  }

  type Course {
    id: String!
    filter: String!
    href: String!
    name: String!
    gradient: String!
    description: String!
    image: Image!
    landing: LandingCourse!
    benefits: [BenefitsCourse!]!
    discounts: DiscountsCourse
    instructors: Instructors!
    whoCanAttend: WhoCanAttend!
    information: Information!
    opportunities: Opportunities!
    syllabus: Syllabus!
    video: VideoCourse
    portfolio: Portfolio
  }

  type Query {
    courses: [Course!]!
    courseByName(href: String!): Course!
  }
`;

export const courseMutationType = gql`
  input ImageInput {
    src: String!
    alt: String!
  }

  # OnCoursesPage

  input OnCoursesPageInputNewValues {
    name: String
    description: String
    gradient: String
    image: ImageInput
  }

  input OnCoursesPageInput {
    href: String!
    newValues: OnCoursesPageInputNewValues!
  }

  # Landing

  input LinkInput {
    text: String
    href: String
  }

  input CourseLandingInputNewValues {
    name: String!
    description: String!
    signUp: LinkInput!
  }

  input CourseLandingInput {
    href: String!
    newValues: CourseLandingInputNewValues!
  }

  # Benefit

  input CourseBenefitInputNewValues {
    id: String!
    title: String!
    description: String!
    image: ImageInput!
  }

  input CourseBenefitInput {
    href: String!
    id: String!
    newData: CourseBenefitInputNewValues!
  }

  # Video

  input CourseVideoInputNewValues {
    title: String
    href: String
  }

  input CourseVideoInput {
    href: String!
    newValues: CourseVideoInputNewValues!
  }

  # Discounts

  input CourseDiscountNewDataInput {
    id: String
    percentage: String
    description: String
    dataAosDelay: String
  }

  input CourseDiscountInput {
    href: String!
    id: String!
    newData: CourseDiscountNewDataInput!
  }

  type Mutation {
    # on course page
    changeCourseOnCoursesPage(input: OnCoursesPageInput!): String!
    # landing
    changeCourseLanding(input: CourseLandingInput!): String!
    # benefit
    changeCourseBenefit(input: CourseBenefitInput!): String!
    addCourseBenefit(input: CourseBenefitInput!): String!
    # discount
    changeCourseDiscount(input: CourseDiscountInput!): String!
    addCourseDiscount(input: CourseDiscountInput!): String!
    # video
    changeCourseVideo(input: CourseVideoInput!): String!
  }
`;
