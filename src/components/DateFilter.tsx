import { DateFilterProps } from "@/types/filters";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

const DateFilter = ({
  startDate,
  onStartDate,
  endDate,
  onEndDate,
}: DateFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col">
        <Label htmlFor="start-date">Début</Label>
        <Input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => onStartDate(e.target.value)}
          className="border rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="end-date">Fin</Label>
        <Input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => onEndDate(e.target.value)}
          className="border rounded-lg"
        />
      </div>
    </div>
  );
};

export default DateFilter;
