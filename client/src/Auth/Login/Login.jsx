import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Auth/Action/AuthAction";
import { Toast } from "../../Component/Alert";

// Defining the initial state for the form fields
let initialState = {
  email: "",
  password: "",
};

// Function to handle the login form
const Login = () => {
  // State to manage the form fields
  const [formState, setFormState] = useState(initialState);

  // Extracting message and error from the store using useSelector
  const { message, error, success } = useSelector((store) => {
    return store.authReducer;
  });

  // Using useDispatch to dispatch actions
  const dispatch = useDispatch();

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validating email format
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formState.email)
    ) {
      Toast.fire({
        icon: "warning",
        title: "Invalid email format",
      });
      return;
    }
    // Validating password length
    if (formState.password.length < 8) {
      Toast.fire({
        icon: "warning",
        title: "Password must be at least 8 characters.",
      });
      return;
    }
    // Dispatching the login action
    dispatch(loginUser(formState));

    if (success === "true") {
      Toast.fire({
        icon: "success",
        title: message,
      });
      return;
    }
    if (success === "false") {
      Toast.fire({
        icon: "error",
        title: error,
      });
      return;
    }
  };

  // JSX for the login form
  return (
    <>
      {/* Container for the login form */}
      <div className="container flex justify-center items-center h-screen bg-gray-100 text-lg">
        {/* Card for the login form */}
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          {/* Title of the login form */}
          <h2 className="font-lora text-xl md:text-3xl font-bold text-red-700 mb-3">
            Login to Access Services
          </h2>
          {/* Form for the login */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email input field */}
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
                value={formState.email}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password input field */}
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
                value={formState.password}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Forgot password and login button */}
            <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
              <Link
                to="/forgot-password"
                className="text-lg font-merry text-blue-600 hover:text-blue-500 mb-2 md:mb-0 md:mr-4"
              >
                Forgot your password?
              </Link>
              <button
                type="submit"
                className="inline-flex font-lora justify-center rounded-lg border border-transparent bg-red-700 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 text-lg font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          {/* Register link */}
          <div className="text-center mt-6">
            <p className="text-lg font-merry text-gray-700">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="font-medium font-merry text-blue-600 hover:text-blue-500"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
