import { FilePlus } from "lucide-react";

const Forms = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FilePlus /> Forms
      </h1>
      <form className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
