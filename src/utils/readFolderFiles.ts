import fs from "fs";

export const readFolderFiles = (directoryPath: string): string[] => {
  const fileNames: string[] = fs.readdirSync(directoryPath);
  return fileNames;
};
