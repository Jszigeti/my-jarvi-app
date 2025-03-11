import { HistoryEntry } from "@/types/history";
import { typeTranslations } from "@/constants/messageTypes";
import { formatWeekRange } from "@/utils/dateHelpers";

export function groupStatsByWeek(
  data: HistoryEntry[]
): Record<string, HistoryEntry[]> {
  return (
    data?.reduce((acc, entry) => {
      acc[entry.week] = acc[entry.week] ? [...acc[entry.week], entry] : [entry];
      return acc;
    }, {} as Record<string, HistoryEntry[]>) || {}
  );
}

export function transformStatsForChart(
  groupedData: Record<string, HistoryEntry[]>
) {
  return Object.entries(groupedData).map(([week, entries]) => {
    const formattedWeek = formatWeekRange(week);
    const dataPoint: Record<string, string | number> = { week: formattedWeek };

    entries.forEach((entry) => {
      dataPoint[typeTranslations[entry.type] || entry.type] =
        entry.response_rate;
    });

    return dataPoint;
  });
}
