import { Transaction } from "../types";

const mockData: Transaction[] = [
  {
    id: "1",
    date: "2025-01-07",
    description: "Payment to Bartolomeo",
    amount: -165.89,
  },
  {
    id: "2",
    date: "2025-01-08",
    description: "Payment to Buggy",
    amount: 308.63,
  },
  {
    id: "3",
    date: "2025-01-10",
    description: "Payment to Crocodile",
    amount: 1.15,
  },
  {
    id: "4",
    date: "2025-01-05",
    description: "Payment to Sanji",
    amount: 190.53,
  },
  {
    id: "5",
    date: "2025-01-02",
    description: "Payment to Kin'emon",
    amount: -73.22,
  },
  {
    id: "6",
    date: "2025-01-11",
    description: "Payment to Shanks",
    amount: 136.98,
  },
  {
    id: "7",
    date: "2025-01-23",
    description: "Payment to Trafalgar D. Water Law",
    amount: -34.74,
  },
  {
    id: "8",
    date: "2025-01-14",
    description: "Payment to Jinbe",
    amount: 258.8,
  },
  {
    id: "9",
    date: "2025-01-27",
    description: "Payment to Brook",
    amount: 49.74,
  },
  {
    id: "10",
    date: "2025-01-24",
    description: "Payment to Nami",
    amount: 56.41,
  },
  {
    id: "11",
    date: "2025-01-03",
    description: "Payment to Monkey D. Luffy",
    amount: 279.37,
  },
  {
    id: "12",
    date: "2025-01-15",
    description: "Payment to Sabo",
    amount: 148.76,
  },
  {
    id: "13",
    date: "2025-01-07",
    description: "Payment to Jinbe",
    amount: 137.46,
  },
  {
    id: "14",
    date: "2025-01-20",
    description: "Payment to Dracule Mihawk",
    amount: 297.54,
  },
  {
    id: "15",
    date: "2025-01-11",
    description: "Payment to Dracule Mihawk",
    amount: 67.89,
  },
  {
    id: "16",
    date: "2025-01-16",
    description: "Payment to Kin'emon",
    amount: 485.89,
  },
  {
    id: "17",
    date: "2025-01-05",
    description: "Payment to Enel",
    amount: 406.61,
  },
  {
    id: "18",
    date: "2025-01-07",
    description: "Payment to Rob Lucci",
    amount: -198.42,
  },
  {
    id: "19",
    date: "2025-01-15",
    description: "Payment to Big Mom",
    amount: 136.97,
  },
  {
    id: "20",
    date: "2025-01-12",
    description: "Payment to Usopp",
    amount: 212.62,
  },
  {
    id: "21",
    date: "2025-01-28",
    description: "Payment to Kaido",
    amount: 17.55,
  },
  {
    id: "22",
    date: "2025-01-09",
    description: "Payment to Brook",
    amount: 19.43,
  },
  {
    id: "23",
    date: "2025-01-10",
    description: "Payment to Trafalgar D. Water Law",
    amount: 466.0,
  },
  {
    id: "24",
    date: "2025-01-26",
    description: "Payment to Franky",
    amount: -116.59,
  },
  {
    id: "25",
    date: "2025-01-20",
    description: "Payment to Bartolomeo",
    amount: -170.65,
  },
  {
    id: "26",
    date: "2025-01-26",
    description: "Payment to Koby",
    amount: -150.97,
  },
  {
    id: "27",
    date: "2025-01-10",
    description: "Payment to Hatchan",
    amount: -120.75,
  },
  {
    id: "28",
    date: "2025-01-08",
    description: "Payment to Jinbe",
    amount: -149.64,
  },
  {
    id: "29",
    date: "2025-01-02",
    description: "Payment to Monkey D. Luffy",
    amount: 211.56,
  },
  {
    id: "30",
    date: "2025-01-05",
    description: "Payment to Usopp",
    amount: 111.87,
  },
];

export const fetchTransactions = async (
  startDate?: string,
  endDate?: string
): Promise<Transaction[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let filteredTransactions = mockData;

        if (startDate) {
          filteredTransactions = filteredTransactions.filter(
            (transaction) => new Date(transaction.date) >= new Date(startDate)
          );
        }

        if (endDate) {
          filteredTransactions = filteredTransactions.filter(
            (transaction) => new Date(transaction.date) <= new Date(endDate)
          );
        }

        resolve(filteredTransactions);
      } catch (error) {
        reject(new Error("Failed to fetch transactions"));
      }
    }, 1000);
  });
};
