import { gql } from "apollo-server-micro";

export const fileType = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input FileUpload {
    path: String!
    file: Upload!
  }

  input FileDelete {
    path: String!
    fileName: String!
  }

  type Query {
    allFilesInFolder(directoryPath: String!): [String!]!
  }

  type Mutation {
    # singleUpload(file: Upload!): File!
    uploadFile(input: FileUpload!): File!
    deleteFile(input: FileDelete!): String!
  }
`;
