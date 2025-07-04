import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <SearchIcon /> Search Page
      </h1>
      <input
        type="text"
        placeholder="Search here..."
        className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 transition"
      />
      <p className="text-gray-500 mt-4">Find the resources you need.</p>
    </div>
  );
};

export default Search;
