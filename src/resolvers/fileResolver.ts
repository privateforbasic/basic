import path from "path";
import fs from "fs";
import { readFolderFiles } from "src/utils/readFolderFiles";

export default {
  Query: {
    allFilesInFolder: (_: any, { directoryPath }) => {
      return readFolderFiles(`public${directoryPath}`);
    },
  },
  Mutation: {
    uploadFile: async (_, { input: { path: _path, file } }) => {
      const { createReadStream, filename } = await file;

      const pathName = path.join(process.cwd(), `${_path}${filename}`);
      const stream = createReadStream();
      await stream.pipe(fs.createWriteStream(pathName));

      return file;
    },
    deleteFile: async (_, { input: { path: _path, fileName } }) => {
      const pathName = path.join(process.cwd(), `${_path}${fileName}`);
      fs.unlinkSync(pathName);

      return "succesful";
    },
  },
};
