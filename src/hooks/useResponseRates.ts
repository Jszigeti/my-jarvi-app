import { useState } from "react";
import { useUserData } from "@nhost/nextjs";
import { useQuery } from "@apollo/client";
import { GET_RESPONSE_RATES } from "@/graphql/historyEntriesStats";
import { getStartDate, getEndDate } from "@/utils/dateHelpers";
import {
  groupStatsByWeek,
  transformStatsForChart,
} from "@/utils/formatResponseStats";

export const useResponseRates = () => {
  const userData = useUserData();

  const [startDate, setStartDate] = useState<string>(getStartDate());
  const [endDate, setEndDate] = useState<string>(getEndDate());

  const { loading, error, data } = useQuery(GET_RESPONSE_RATES, {
    variables: {
      user_id: userData?.id,
      start_date: `${startDate}T00:00:00.000Z`,
      end_date: `${endDate}T23:59:59.999Z`,
    },
  });

  const tableData = groupStatsByWeek(data?.historyentries_stats || []);
  const chartData = transformStatsForChart(tableData);

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    loading,
    error,
    tableData,
    chartData,
  };
};
