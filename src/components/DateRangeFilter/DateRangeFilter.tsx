import React from "react";

interface DateRangeFilterProps {
  startDate: string | null;
  endDate: string | null;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="mb-4 flex space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          value={startDate || ""}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="px-1 mt-1 block w-full rounded-md border border-gray-600 shadow-sm bg-gray-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          value={endDate || ""}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="px-1 mt-1 block w-full rounded-md border border-gray-600 shadow-sm bg-gray-400"
        />
      </div>
    </div>
  );
};
