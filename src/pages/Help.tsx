import { HelpCircle } from "lucide-react";

const Help = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <HelpCircle /> Help Center
      </h1>
      <p className="text-gray-500 mt-4">Find answers to frequently asked questions here.</p>
    </div>
  );
};

export default Help;
