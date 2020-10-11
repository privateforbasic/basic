import { mergeTypeDefs } from "@graphql-tools/merge";

import { courseType, courseMutationType } from "./Course";
import { commonType, commonMutationType } from "./common";
import { coursesPageType } from "./CoursesPage";
import { layoutType } from "./Layout";
import { fileType } from "./fileType";
import { homeType } from "./Home";

export default mergeTypeDefs([
  commonType,
  commonMutationType,
  layoutType,
  homeType,
  coursesPageType,
  courseType,
  courseMutationType,
  fileType,
]);
