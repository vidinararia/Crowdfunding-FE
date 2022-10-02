import { gql } from "@apollo/client";

export const INSERT_DATA_PROJECT_BY_ID = gql`
  mutation MyMutation($object: project_insert_input = {}) {
    insert_project_one(object: $object) {
      id
    }
  }
`;

export const DELETE_DATA_PROJECT_BY_ID = gql`
  mutation MyMutation($id: Int!) {
    delete_project_by_pk(id: $id) {
      id
    }
  }
`;
