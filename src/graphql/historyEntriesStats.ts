import { gql } from "@apollo/client";

export const GET_RESPONSE_RATES = gql`
  query GetResponseRates(
    $user_id: uuid!
    $start_date: timestamptz!
    $end_date: timestamptz!
  ) {
    historyentries_stats(
      where: {
        user_id: { _eq: $user_id }
        week: { _gte: $start_date, _lte: $end_date }
      }
      order_by: { week: asc }
    ) {
      type
      week
      total_messages_sent
      total_replies
      no_reply
      response_rate
    }
  }
`;
