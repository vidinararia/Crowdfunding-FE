import { gql } from "@apollo/client";

export const GET_DATA_PROJECT = gql`
  query MyQuery {
    project(order_by: { id: desc }) {
      id
      name
      target
      startdate
      dateline
      total
    }
  }
`;

export const GET_DATA_PROJECT_BY_ID = gql`
  query MyQuery($id: Int!) {
    project_by_pk(id: $id) {
      id
      name
      target
      total
      startdate
      dateline
      creator
    }
  }
`;
