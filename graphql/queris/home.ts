import { gql } from "@apollo/client";
import { layoutQuery } from "./layout";

export const homeQuery = `
  home {
    #----------------- ##
    landing {
      hgroup {
        top
        bottom
      }
      buttomText
    }
    #----------------- ##
    advantages {
      id
      title
      description
      image {
        src
        alt
      }
    }
    #----------------- ##
    companies {
      title
      companies {
        id
        href
        image {
          src
          alt
          style
        }
      }
    }
    #----------------- ##
    video {
      articles {
        id
        title
        description
      }
      video {
        src
        poster
      }
    }
    #----------------- ##
    experiences {
      id
      title
      number
      className
    }
    #----------------- ##
    feedbacks {
      feedbacks {
        fullName
        feedback
        image {
          src
          alt
        }
      }
      icon {
        src
        alt
      }
      button {
        href
        text
      }
    }
    #----------------- ##
    blog {
      title
      all {
        href
        text
      }
      blogs {
        id
        title
        description
        readMore {
          href
          text
        }
        image {
          src
          alt
        }
      }
    }
  }
`;

export const HomeQuery = gql`
  query HomeQuery {
    ${layoutQuery}
    ${homeQuery}
  }
`;
