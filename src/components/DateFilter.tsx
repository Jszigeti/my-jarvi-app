import { DateFilterProps } from "@/types/filters";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { useDateFilter } from "@/hooks/useDateFilter"; // Assurez-vous que le chemin d'importation est correct

const DateFilter = ({
  startDate,
  onStartDate,
  endDate,
  onEndDate,
}: DateFilterProps) => {
  const { handleStartDateChange, handleEndDateChange, error } = useDateFilter({
    startDate,
    onStartDate,
    endDate,
    onEndDate,
  });

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="start-date">Début</Label>
          <Input
            id="start-date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="end-date">Fin</Label>
          <Input
            id="end-date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="border rounded-lg"
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default DateFilter;
