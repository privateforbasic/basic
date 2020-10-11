import { gql } from "apollo-server-micro";

export const layoutType = gql`
  type Tab {
    id: String
    tab: String
    name: String
  }

  type Header {
    tabs: [Tab!]!
    flags: [Image!]!
  }

  type Layout {
    header: Header!
  }

  type Query {
    layout: Layout!
  }
`;
