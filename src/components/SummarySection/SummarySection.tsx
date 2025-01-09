import React from "react";

interface SummarySectionProps {
  totalTransactions: number;
  totalAmount: number;
}

export const SummarySection: React.FC<SummarySectionProps> = ({
  totalTransactions,
  totalAmount,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">Summary</h2>
      <div className="flex justify-between">
        <div>Total Transactions: {totalTransactions}</div>
        <div>Total Amount: ${totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};
