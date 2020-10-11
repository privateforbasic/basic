import { gql } from "apollo-server-micro";

export const homeType = gql`
  type Blog {
    id: String!
    title: String!
    description: String!
    readMore: Link!
    image: Image!
  }

  type Blogs {
    title: String!
    all: Link!
    blogs: [Blog!]!
  }

  type Feedback {
    id: String!
    fullName: String!
    feedback: String!
    image: Image!
  }

  type Feedbacks {
    feedbacks: [Feedback!]!
    icon: Image!
    button: Link!
  }

  type Experience {
    id: String!
    title: String!
    number: Int!
    className: String!
  }

  type VideoAttributes {
    src: String!
    poster: String!
  }

  type Video {
    articles: [Article!]!
    video: VideoAttributes!
  }

  type Companie {
    id: String!
    href: String!
    image: Image!
  }

  type Companies {
    title: String!
    companies: [Companie!]!
  }

  type Advantage {
    id: String!
    title: String!
    description: String!
    image: Image!
  }

  type Hgroup {
    top: String!
    bottom: String!
  }

  type Landing {
    hgroup: Hgroup!
    buttomText: String!
  }

  type Home {
    landing: Landing!
    advantages: [Advantage!]!
    companies: Companies!
    video: Video!
    experiences: [Experience!]!
    feedbacks: Feedbacks!
    blog: Blogs!
  }

  type Query {
    home: Home!
  }
`;
