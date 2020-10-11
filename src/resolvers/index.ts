import { mergeResolvers } from "@graphql-tools/merge";

import homeResolver from "./homeResolver";
import layoutResolver from "./layoutResolver";
import coursesPageResolver from "./coursesPageResolver";
import courseResolver from "./courseResolver";
import fileResolver from "./fileResolver";

export default mergeResolvers([
  homeResolver,
  layoutResolver,
  coursesPageResolver,
  courseResolver,
  fileResolver,
]);
