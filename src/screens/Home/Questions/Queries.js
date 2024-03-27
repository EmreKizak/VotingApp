import {gql} from '@apollo/client';

export const GET_QUESTIONS_SUBSCRIPTION = gql`
  subscription {
    question(order_by: {created_at: desc}) {
      id
      text
    }
  }
`;
