import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-red-700 text-7xl lg:text-9xl font-lora font-semibold">
              404
            </h3>
            <p className="text-gray-800 lg:text-7xl font-lora font-semibold text-5xl">
              Page not found
            </p>
            <p className="text-gray-700 text-xl font-medium font-merry ">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to={"/"}
                className="block py-2 px-4 text-white font-medium bg-red-700 duration-150 hover:bg-red-500 rounded-lg"
              >
                Go back
              </Link>
              <Link
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
