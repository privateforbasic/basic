import { gql } from "apollo-server-micro";

export const commonType = gql`
  type Image {
    id: String
    src: String!
    alt: String!
    style: String
  }

  type Link {
    href: String!
    text: String
  }

  type Article {
    id: String!
    title: String!
    description: String
    image: Image
    style: String
  }
`;

export const commonMutationType = gql`
  input CourseSomeFieldInput {
    href: String!
    field: String!
    value: String!
  }

  input DeleteFieldFromArrayInput {
    href: String!
    id: String!
    field: String!
  }

  type Mutation {
    deleteFiledFromArray(input: DeleteFieldFromArrayInput!): String!
    changeCourseSomeField(input: CourseSomeFieldInput!): String!
  }
`;
