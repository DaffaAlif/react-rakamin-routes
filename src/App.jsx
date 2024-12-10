import Banner from "./components/Banner";
import Banner1 from "./components/Banner1";
import TableRakamin from "./components/TableRakamin";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="grid gap-12">
        <Banner1 />
        <Banner />
        <TableRakamin />
      </div>
    </MainLayout>
  );
}

export default App;
