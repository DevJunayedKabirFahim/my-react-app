import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Link to={"/"} className="text-xl font-bold text-gray-800">MyApp</Link>
            </div>
            <div className="space-x-4">             
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
