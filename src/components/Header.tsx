import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Centered title with rainbow-colored words */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 drop-shadow-md">
          <span className="text-lightred-200">ts</span>
          <span className="text-yellow-200">-npm</span>
          <span className="text-green-200">-vite</span>
          <span className="text-blue-200">-tailwind</span>
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaInfoCircle />
            About
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaBriefcase />
            Services
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-black hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            <FaUser />
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
