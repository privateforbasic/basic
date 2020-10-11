import { getCollection } from "utils/getCollection";

export default {
  Query: {
    coursesPage: async () => await getCollection("coursesPage"),
  },
  Mutation: {},
};
