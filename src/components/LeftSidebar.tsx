import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaInfoCircle, FaClipboardList, FaHeart } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaInfoCircle /> About
        </Link>
        <Link to="/services" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaBriefcase /> Services
        </Link>
        <Link to="/profile" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaUser /> Profile
        </Link>
        <Link to="/catalog" className="flex items-center gap-2 text-lg hover:text-blue-400">
          📦 Catalog
        </Link>
        <Link to="/comparison" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaClipboardList /> Comparison Cart
        </Link>
        <Link to="/wishlist" className="flex items-center gap-2 text-lg hover:text-blue-400">
          <FaHeart /> Wishlist
        </Link>
      </nav>
    </div>
  );
};

export default LeftSidebar;
