import { HistoryEntry } from "@/types/history";
import { typeTranslations } from "@/constants/messageTypes";
import { formatWeekRange } from "@/utils/dateHelpers";

export function groupStatsByWeek(
  data: HistoryEntry[]
): Record<string, HistoryEntry[]> {
  return (
    data?.reduce((acc, entry) => {
      if (!acc[entry.week]) acc[entry.week] = [];
      acc[entry.week].push(entry);
      return acc;
    }, {} as Record<string, HistoryEntry[]>) || {}
  );
}

export function transformStatsForChart(
  groupedData: Record<string, HistoryEntry[]>
) {
  return Object.entries(groupedData).map(([week, entries]) => {
    const formattedWeek = formatWeekRange(week);
    const dataPoints = entries.map((entry) => {
      const typeKey = typeTranslations[entry.type] || entry.type;
      return { [typeKey]: entry.response_rate };
    });
    return {
      week: formattedWeek,
      ...dataPoints.reduce((acc, point) => ({ ...acc, ...point }), {}),
    };
  });
}
