import { initializeDB } from "src/db";
// import { layout, home, courses, coursesPage } from "./data";
import path from "path";
import { createWriteStream } from "fs";

const getCollection = async (name: string) => {
  const db = await initializeDB();
  const collection = await db.collection(name).findOne({});

  return collection;
};

const setData = async (match: any, newData: any) => {
  const db = await initializeDB();
  await db.collection("courses").updateOne(match, { $set: newData });
};
const deleteData = async (match: any, update: any) => {
  const db = await initializeDB();
  await db.collection("courses").updateOne(match, { $pull: update });
};
const pushData = async (match: any, newData: any) => {
  const db = await initializeDB();
  await db.collection("courses").updateOne(match, { $push: newData });
};

export const resolvers = {
  Query: {
    layout: async () => {
      return await getCollection("layout");
    },
    home: async () => {
      return await getCollection("home");
    },
    coursesPage: async () => {
      return await getCollection("coursesPage");
    },
    courses: async () => {
      const db = await initializeDB();
      const courses = await db.collection("courses").find().toArray();

      return courses;
    },
    courseByName: async (_: any, { href }) => {
      const db = await initializeDB();
      let course = await db.collection("courses").findOne({ href });

      return course;
    },
  },
  Mutation: {
    changeCourseSomeField: async (_, { input: { href, field, value } }) => {
      await setData({ href }, { [field]: value });
      return "success";
    },
    deleteFiledFromArray: async (_, { input: { href, id, field } }) => {
      await deleteData({ href }, { [field]: { id } });
      return "success";
    },
    changeCourseOnCoursesPage: async (_, { input: { href, newValues } }) => {
      await setData({ href }, newValues);
      return "success";
    },
    changeCourseLanding: async (_, { input: { href, newValues } }) => {
      await setData({ href }, { landing: newValues });
      return "success";
    },
    changeCourseBenefit: async (_, { input: { href, id, newData } }) => {
      await setData({ href }, { [`benefits.${id}`]: newData });
      return "success";
    },
    addCourseBenefit: async (_, { input: { href, newData } }) => {
      await pushData({ href }, { benefits: newData });
      return "success";
    },
    changeCourseVideo: async (_, { input: { href, newValues } }) => {
      await setData({ href }, { video: newValues });
      return "success";
    },
    addCourseDiscount: async (_, { input: { href, newData } }) => {
      await pushData({ href }, { "discounts.articles": newData });
      return "success";
    },
    changeCourseDiscount: async (_, { input: { href, id, newData } }) => {
      const updates = Object.entries(newData).reduce(
        (acc, [key, value]) =>
          value
            ? {
                ...acc,
                [`discounts.articles.$.${key}`]: value,
              }
            : acc,
        {}
      );
      await setData(
        {
          href,
          "discounts.articles": { $elemMatch: { id } },
        },
        updates
      );
      return "success";
    },

    uploadFile: async (_, { input: { path: _path, file } }) => {
      const { createReadStream, filename } = await file;

      const pathName = path.join(process.cwd(), `${_path}${filename}`);
      const stream = createReadStream();
      await stream.pipe(createWriteStream(pathName));

      return file;
    },
  },
};
