import React from "react";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import FinancialTable from "./components/FinancialTable";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <FileUpload />
          <FinancialTable />
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
