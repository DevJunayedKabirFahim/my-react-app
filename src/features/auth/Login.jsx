import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
          <div className="bg-indigo-900 p-6 flex flex-col items-center">
            <FaUser className="w-16 h-16 text-green-400 mb-4" />
            <p className="text-white text-sm items-baseline">
              Please enter user information
            </p>
          </div>
          <div className="bg-white p-6">
            <form action="" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="w-100 py-2 text-white bg-green-500 hover:bg-green-600 rounded-full"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="flex items-center mt-10 mb-5">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm ml-3 mr-3">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div>
              <button className="bg-black text-white hover:bg-gray-800 rounded-full py-2 px-2 w-full mt-2 flex items-center justify-center">
                <FaGoogle className="mr-3"/>Sign in with Google
              </button>
            </div>
            <div className="mb-5 mt-5">
              <p className="text-center text-gray-500 mt-3">Don't have an account? <Link className="text-green-600 cursor-pointer" to="">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
