export interface DateFilterProps {
  startDate: string;
  onStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  onEndDate: React.Dispatch<React.SetStateAction<string>>;
}
