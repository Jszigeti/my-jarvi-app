import { useState } from "react";
import { DateFilterProps } from "@/types/filters";

export const useDateFilter = ({
  startDate,
  onStartDate,
  endDate,
  onEndDate,
}: DateFilterProps) => {
  const [error, setError] = useState("");

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    onStartDate(newStartDate);
    if (newStartDate > endDate) onEndDate(newStartDate);
    setError("");
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    if (newEndDate < startDate) {
      setError(
        "La date de fin ne peut pas être antérieure à la date de début."
      );
    } else {
      onEndDate(newEndDate);
      setError("");
    }
  };

  return {
    handleStartDateChange,
    handleEndDateChange,
    error,
  };
};
