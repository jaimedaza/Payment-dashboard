import React from "react";

export const SkeletonLoader: React.FC<{ rows?: number }> = ({ rows = 5 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="border border-gray-300 px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="h-4 bg-gray-300 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
