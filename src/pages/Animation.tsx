import { Move } from "lucide-react";

const Animation = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-bounce">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Move /> Animation
      </h1>
      <p className="text-gray-500 mt-4">Add interactive animations here.</p>
    </div>
  );
};

export default Animation;
