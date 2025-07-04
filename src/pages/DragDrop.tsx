import { Move } from "lucide-react";

const DragDrop = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Move /> Drag and Drop
      </h1>
      <p className="text-gray-500 mt-4">Implement drag & drop features here.</p>
    </div>
  );
};

export default DragDrop;
