import { gql } from "@apollo/client";

export const ALL_FILES_IN_FOLDER = gql`
  query ALL_FILES_IN_FOLDER($directoryPath: String!) {
    allFilesInFolder(directoryPath: $directoryPath)
  }
`;
