import { initializeDB } from "src/db";

export const getCollection = async (name: string) => {
  const db = await initializeDB();
  const collection = await db.collection(name).findOne({});

  return collection;
};
