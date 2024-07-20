import React from "react";

const Login = () => {
  return (
    <>
      <div className="container flex justify-center items-center h-screen bg-gray-100 text-lg">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="font-lora text-xl md:text-3xl font-bold text-gray-800 mb-3">
            Login to Access Services
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-merry text-lg font-medium text-gray-700"
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
                className="block font-merry text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
              <a
                href="/forgot-password"
                className="text-lg font-merry text-blue-600 hover:text-blue-500 mb-2 md:mb-0 md:mr-4"
              >
                Forgot your password?
              </a>
              <button
                type="submit"
                className="inline-flex font-lora justify-center rounded-lg border border-transparent bg-blue-500 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-lg font-merry text-gray-700">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-medium font-merry text-blue-600 hover:text-blue-500"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
