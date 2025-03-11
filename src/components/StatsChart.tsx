import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import { typeTranslations, typeColors } from "@/constants/messageTypes";
import { StatsChartProps } from "@/types/charts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/ui/chart";

const StatsChart = ({ data }: StatsChartProps) => {
  return (
    <ChartContainer className="h-[350px] w-full" config={{}}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.keys(typeTranslations).map((type) => (
          <Line
            key={type}
            type="monotone"
            dataKey={typeTranslations[type]}
            stroke={typeColors[type] || "#8884d8"}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ChartContainer>
  );
};

export default StatsChart;
