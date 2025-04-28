import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { formatCurrency } from "../utils/formatters";

const FinancialTable = () => {
  const { data } = useContext(DataContext);

  if (!data || data.length === 0) {
    return <div>No data loaded.</div>;
  }

  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto my-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="text-center">
              <td className="py-2 px-4 border-b">{row.date}</td>
              <td className="py-2 px-4 border-b">{row.description}</td>
              <td className="py-2 px-4 border-b">{formatCurrency(row.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;
