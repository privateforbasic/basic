import { getCollection } from "utils/getCollection";

export default {
  Query: {
    layout: async () => await getCollection("layout"),
  },
  Mutation: {},
};
