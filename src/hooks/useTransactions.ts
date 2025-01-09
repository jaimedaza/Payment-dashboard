import { useState, useEffect } from "react";
import { fetchTransactions } from "../api/mockApi";
import { Transaction } from "../types";

interface UseTransactionsReturn {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  totalTransactions: number;
}

const useTransactions = (
  startDate?: string,
  endDate?: string,
  currentPage: number = 1,
  pageSize: number = 10
): UseTransactionsReturn => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchTransactions(startDate, endDate)
      .then((data) => {
        const startIndex = (currentPage - 1) * pageSize;
        const paginatedTransactions = data.slice(
          startIndex,
          startIndex + pageSize
        );
        setTransactions(paginatedTransactions);
        setTotalTransactions(data.length);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [startDate, endDate, currentPage, pageSize]);

  return { transactions, loading, error, totalTransactions };
};

export default useTransactions;
