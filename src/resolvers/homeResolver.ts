import { getCollection } from "utils/getCollection";

export default {
  Query: {
    home: async () => await getCollection("home"),
  },
  Mutation: {},
};
