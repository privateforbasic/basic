import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!, $path: String!) {
    uploadFile(file: $file, path: $path) {
      filename
    }
  }
`;

export const DELETE_FILE = gql`
  mutation DELETE_FILE($input: FileDelete!) {
    deleteFile(input: $input)
  }
`;
