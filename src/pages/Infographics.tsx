import { BarChart3 } from "lucide-react";

const Infographics = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <BarChart3 /> Infographics Dashboard
      </h1>
      <p className="text-gray-500 mt-4">Visualize data with charts and graphs.</p>
    </div>
  );
};

export default Infographics;
