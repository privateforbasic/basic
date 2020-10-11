import { MongoClient } from "mongodb";

let db: any;

export const initializeDB = async () => {
  if (!db) {
    try {
      const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (!dbClient.isConnected()) await dbClient.connect();
      db = dbClient.db(process.env.MONGO_DB_NAME); // database name
    } catch (e) {
      console.log("--->error while connecting with graphql context (db)", e);
    }
  }

  return db;
};
