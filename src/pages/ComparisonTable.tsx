import { Table } from "lucide-react";

const ComparisonTable = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Table /> Comparison Table
      </h1>
      <p className="text-gray-500 mt-4">Add data to compare items side by side.</p>
      {/* You can later embed a dynamic table here */}
    </div>
  );
};

export default ComparisonTable;
