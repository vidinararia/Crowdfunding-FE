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

export const UPDATE_DATA_PROJECT_BY_ID = gql`
  mutation MyMutation($id: Int!, $total: numeric = 0) {
    update_project_by_pk(pk_columns: { id: $id }, _inc: { total: $total }) {
      id
      total
    }
  }
`;
