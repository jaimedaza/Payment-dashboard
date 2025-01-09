# Payment Transaction Dashboard

This is a prototype of a Payment Transaction Dashboard built using **React.js**, **TypeScript**, and **TailwindCSS**. The application simulates displaying payment transaction data and allows users to filter the transactions based on a date range.

## Features

- **Transaction List**: Displays a list of payment transactions with details such as Transaction ID, Date, Description, and Amount (USD).
- **Date Range Filter**: Allows users to filter transactions based on a specified date range.
- **Pagination**: Limits the number of transactions shown per page (10 per page).
- **Summary Section**: Displays the total number of transactions and the total transaction amount within the selected date range.
- **Error Handling**: Shows user-friendly error messages in case of API request failures.
- **Skeleton Loader**: Shows a skeleton loader when the transactions are being fetched.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **TailwindCSS**: Utility-first CSS framework for designing modern UIs.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

You need to have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jaimedaza/Payment-dashboard.git

   ```

2. Navigate to the project directory:

   ```bash
   cd Payment-dashboard

   ```

3. Install the required dependencies:

   ```bash
   npm install

   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will be running at http://localhost:3000.

## Project Structure

```bash
├── src
│ ├── api # Contains the mock API and transaction data
│ ├── components # Contains the React components (e.g., TransactionList, DateRangeFilter, etc.)
│ ├── hooks # Custom hooks (e.g., useTransactions, usePagination, etc.)
│ ├── App.tsx # Main app component
│ ├── tailwind.config.js # TailwindCSS configuration
│ └── ...
└── public
├── index.html # Main HTML file
└── ...
```
