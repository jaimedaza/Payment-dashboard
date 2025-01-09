import React, { useMemo } from "react";
import { TransactionTable } from "../TransactionTable";
import { SkeletonLoader } from "../SkeletonLoader";
import { DateRangeFilter } from "../DateRangeFilter";
import { SummarySection } from "../SummarySection";
import { Pagination } from "../Pagination";
import useTransactions from "../../hooks/useTransactions";
import useDateRange from "../../hooks/useDateRange";
import usePagination from "../../hooks/usePagination";

export const TransactionsList: React.FC = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange();

  const {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    setTotalPages,
  } = usePagination(1);
  const pageSize = 10;

  const { transactions, loading, error, totalTransactions } = useTransactions(
    startDate || undefined,
    endDate || undefined,
    currentPage,
    pageSize
  );

  const totalAmount = useMemo(
    () =>
      transactions.reduce((sum, transaction) => sum + transaction.amount, 0),
    [transactions]
  );

  useMemo(() => {
    const total = Math.ceil(totalTransactions / pageSize) || 1;
    setTotalPages(total);
  }, [totalTransactions, pageSize, setTotalPages]);

  if (loading) {
    return (
      <div className="text-center">
        <SkeletonLoader rows={5} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-white text-center p-16 bg-red-500 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <>
      <DateRangeFilter
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <SummarySection
        totalTransactions={totalTransactions}
        totalAmount={totalAmount}
      />

      <TransactionTable transactions={transactions} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </>
  );
};
