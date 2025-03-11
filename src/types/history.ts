export interface HistoryEntry {
  week: string;
  type: string;
  response_rate: number;
  total_messages_sent: number;
  total_replies: number;
  no_reply: number;
}

export interface ResponseRatesData {
  historyentries_stats: HistoryEntry[];
}
