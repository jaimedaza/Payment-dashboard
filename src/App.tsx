import { TransactionsList } from "./components/TransactionList";

function App() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Transactions Dashboard</h1>
      <TransactionsList />
    </div>
  );
}

export default App;
