import Fund from "./components/Fund";
import Banner1 from "./components/Banner1";
import TableRakamin from "./components/TableRakamin";
import MainLayout from "./layout/MainLayout";
import { useState, useEffect } from "react";
import { Loader, AlertCircle, CheckCircle, Circle } from "lucide-react";
import { useNavigate } from "react-router";
import getCookie from "./utils/getCookie";
import { Base64 } from "js-base64";

function App() {
  const [userData, setUserData] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [balanceShow, setBalanceShow] = useState(false);
  const navigate = useNavigate()



  useEffect(() => {
    const fetchCurrentUser = async () => {
      const token = localStorage.getItem('auth')
      console.log(token)
      
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/users/current", {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }
        const data = await response.json();
        setUserData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        navigate('/login')
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  // useEffect(() => {
  //   const fetchTransactionsData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("http://localhost:3000/transactions");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch!");
  //       }
  //       const data = await response.json();
  //       setTransactions(data);
  //       setError(null);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchTransactionsData();
  // }, []);

  const handleShowBalance = () => {
    console.log("click");
    setBalanceShow(!balanceShow);
  };

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
      {console.log(userData)}
      <div className="grid gap-12">
        <Banner1 userData={userData} />
        <Fund
          userData={userData}
          handleShowBalance={handleShowBalance}
          balanceShow={balanceShow}
        />
        {/* <TableRakamin transactions={transactions}/> */}
      </div>
    </MainLayout>
  );
}

export default App;
