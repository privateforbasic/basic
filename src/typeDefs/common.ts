import { gql } from "apollo-server-micro";

export const commonTypeDefs = gql`
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
