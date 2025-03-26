import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav className="flex gap-6">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
          <FaHome /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-2 hover:text-blue-400">
          <FaInfoCircle /> About
        </Link>
        <Link to="/services" className="flex items-center gap-2 hover:text-blue-400">
          <FaBriefcase /> Services
        </Link>
        <Link to="/profile" className="flex items-center gap-2 hover:text-blue-400">
          <FaUser /> Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
