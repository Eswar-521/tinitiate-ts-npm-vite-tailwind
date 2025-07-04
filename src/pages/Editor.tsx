import { Edit3 } from "lucide-react";

const Editor = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Edit3 /> Online Editor
      </h1>
      <textarea
        className="w-full h-64 p-4 border rounded mt-4 focus:outline-none focus:ring focus:ring-indigo-300"
        placeholder="Start writing..."
      />
    </div>
  );
};

export default Editor;
