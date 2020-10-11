import { gql } from "@apollo/client";

export const layoutQuery = `
  layout {
    header {
      tabs {
        id
        tab
        name
      }
      flags {
        id
        src
        alt
      }
    }
  }
`;

export const LayoutQuery = gql`
  query {
    ${layoutQuery}
  }
`;
