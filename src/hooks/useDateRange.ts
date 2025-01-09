import { useState } from "react";

interface UseDateRangeReturn {
  startDate: string | null;
  endDate: string | null;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  resetDateRange: () => void;
}

const useDateRange = (): UseDateRangeReturn => {
  const [startDate, setStartDateState] = useState<string | null>(null);
  const [endDate, setEndDateState] = useState<string | null>(null);

  const setStartDate = (date: string) => setStartDateState(date);
  const setEndDate = (date: string) => setEndDateState(date);

  const resetDateRange = () => {
    setStartDateState(null);
    setEndDateState(null);
  };

  return { startDate, endDate, setStartDate, setEndDate, resetDateRange };
};

export default useDateRange;
