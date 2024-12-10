import Fund from "./components/Fund";
import Banner1 from "./components/Banner1";
import TableRakamin from "./components/TableRakamin";
import MainLayout from "./layout/MainLayout";
import { useState, useEffect } from "react";
import { Loader, AlertCircle, CheckCircle, Circle } from "lucide-react";

function App() {
  const [balance, setBalance] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/balance");
        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }
        const data = await response.json();
        setBalance(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBalanceData();
  }, []);

  useEffect(() => {
    const fetchTransactionsData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }
        const data = await response.json();
        setTransactions(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactionsData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center p-8">
          <Loader className="animate-spin text-blue-500" size={24} />
          <span className="ml-2">Loading todos</span>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="p-4 bg-red-50 text-red-500 rounded-lg flex items-center">
          <AlertCircle size={20} className="mr-2" />
          <span>Error : {error}</span>
        </div>
      </>
    );
  }

  return (
    <MainLayout>
      <div className="grid gap-12">
        <Banner1 />
        <Fund balance={balance}/>
        <TableRakamin transactions={transactions}/>
      </div>
    </MainLayout>
  );
}

export default App;
