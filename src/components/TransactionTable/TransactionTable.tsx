import { Transaction } from "../../types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-sm">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-sm">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-sm">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 text-sm">
              Amount (USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-sm">
                {transaction.id}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                {transaction.date}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                {transaction.description}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm">
                ${transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
