import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation uploadFile($input: FileUpload!) {
    uploadFile(input: $input) {
      filename
    }
  }
`;

export const DELETE_FILE = gql`
  mutation DELETE_FILE($input: FileDelete!) {
    deleteFile(input: $input)
  }
`;
