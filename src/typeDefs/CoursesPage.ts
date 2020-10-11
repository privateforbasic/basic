import { gql } from "apollo-server-micro";

export const coursesPageTypeDefs = gql`
  type Filter {
    id: String!
    filter: String!
    title: String!
  }

  type Question {
    id: String!
    answer: String!
    question: String!
  }

  type Faq {
    title: String!
    questions: [Question!]!
  }

  type Benefits {
    title: String!
    articles: [Article!]!
  }

  type CoursesPage {
    benefits: Benefits!
    faq: Faq!
    filters: [Filter!]!
  }
`;
