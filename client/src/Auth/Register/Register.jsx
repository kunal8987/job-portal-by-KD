import React, { useState } from "react";
import { Link } from "react-router-dom";

// Function to handle the registration form
function Register() {
  // State to manage the visibility of the password
  const [showPassword, setShowPassword] = useState(false);
  // State to manage the role selection
  const [role, setRole] = useState("");

  return (
    <div className="container flex justify-center items-center h-screen bg-gray-100 xl:text-lg">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="font-lora text-xl md:text-3xl font-bold text-gray-800 mb-2">
          Welcome to the Job Portal
        </h2>
        <p className="font-merry text-lg text-gray-800 mb-4">
          Create A Free Account
        </p>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block font-merry text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-merry text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-merry text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <span className="font-lora sm:text-sm">Hide</span>
                ) : (
                  <span className="font-lora sm:text-sm">Show</span>
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block font-merry text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
            >
              <option value="">Select a role</option>
              <option value="candidate">Candidate</option>
              <option value="recuriter">Recruiter</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              <Link
                to="/auth/login"
                className="font-medium font-merry text-blue-600 hover:text-blue-500"
              >
                Already have an account?
              </Link>
            </div>
            <button
              type="submit"
              className="inline-flex font-lora justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
