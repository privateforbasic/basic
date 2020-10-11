import { gql } from "@apollo/client";
import { layoutQuery } from "./layout";

const courseFragments = {
  portfolioFragment: `
  fragment portfolioFragment on Course {
    portfolio {
      link {
        href
        text
      }
      texts
      image {
        src
        alt
      }
    }
  }
`,
  videoFragment: `
  fragment videoFragment on Course {
    video {
      title
      href
    }
  }
`,
  syllabusFragment: `
  fragment syllabusFragment on Course {
    syllabus {
      title
      link {
        href
        text
      }
      sections {
        id
        title
        list {
          id
          title
        }
      }
    }
  }
`,
  opportunitiesFragment: `
fragment opportunitiesFragment on Course {
  opportunities {
    title
    articles {
      id
      title
      style
      image {
        src
        alt
      }
    }
  }
}
`,
  informationFragment: `
fragment informationFragment on Course {
  information {
    texts {
      id
      title
    }
  }
}
`,
  whoCanAttendFragment: `
fragment whoCanAttendFragment on Course {
  whoCanAttend {
    title
    texts {
      id
      title
    }
  }
}
`,
  instructorsFragment: `
fragment instructorsFragment on Course {
  instructors {
    title
    peoples {
      id
      href
      title
      description
      image {
        alt
        src
      }
    }
  }
}
`,
  discountsFragment: `
fragment discountsFragment on Course {
  discounts {
    title
    articles {
      id
      percentage
      description
      dataAosDelay
    }
  }
}
`,
  benefitsFragment: `
fragment benefitsFragment on Course {
  benefits {
    id
    title
    description
    image {
      alt
      src
    }
  }
}
`,
  landingFragment: `
fragment landingFragment on Course {
  landing {
    name
    description
    signUp {
      href
      text
    }
  }
}
`,
};

export const allFragments = Object.values(courseFragments).reduce(
  (acc, value) => `${acc}\n${value}`,
  ""
);

export const allQueryFragments = Object.keys(courseFragments).reduce(
  (acc, key) => `${acc} ...${key}`,
  ""
);

export const coursesQuery = `
  courses {
    id
    href
    gradient
    image {
      alt
      src
    }
  }
`;

export const CoursesQuery = gql`
  query CoursesQuery {
    ${layoutQuery}
    ${coursesQuery}
  }
`;

export const CourseByNameQuery = gql`
  query CoursesByNameQuery($href: String!) {
    ${layoutQuery}
    courseByName(href: $href){
      id
      href
      gradient
      image {
        alt
        src
      }
      ${allQueryFragments}
    }
  }
  ${allFragments}
`;
