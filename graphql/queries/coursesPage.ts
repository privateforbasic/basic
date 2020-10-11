import { gql } from "@apollo/client";
import { layoutQuery } from "./layout";

export const coursesPageQuery = `
  coursesPage {
    benefits {
      title
      articles {
        id
        title
        description
        image {
          src
          alt
        }
      }
    }
    faq {
      title
      questions {
        id
        answer
        question
      }
    }
    filters {
      id
      title
      filter
    }
  }
  
  courses {
    id
    filter
    href
    name
    description
    gradient
    image {
      alt
      src
    }
  }
`;

export const CoursesPageQuery = gql`
  query CoursesPageQuery {
    ${layoutQuery}
    ${coursesPageQuery}
  }
`;
