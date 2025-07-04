import { ListOrdered } from "lucide-react";

const DataTable = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <ListOrdered /> Data Table
      </h1>
      <table className="w-full mt-6 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Example 1</td>
            <td className="border p-2">Description here</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
