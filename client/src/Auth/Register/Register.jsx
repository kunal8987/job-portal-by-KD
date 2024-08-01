// Importing necessary React hooks and components
import React, { useState } from "react";
// Importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";
// Importing action creator for adding a user
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../../Redux/Auth/Action/AuthAction";
// Importing useDispatch and useSelector from react-redux for state management
import { useDispatch } from "react-redux";
// Importing Toast component for alert messages
import { Toast } from "../../Component/Alert";

import axios from "axios";

// Defining the initial state for the form fields
let initialState = {
  username: "",
  email: "",
  password: "",
  role: "",
};

// Function to handle the registration form
function Register() {
  // State to manage the visibility of the password
  const [showPassword, setShowPassword] = useState(false);
  // State to manage the role selection
  const [formState, setFormState] = useState(initialState);

  // Using useDispatch to dispatch actions
  const dispatch = useDispatch();

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating form fields
    if (
      !formState.username ||
      !formState.email ||
      !formState.password ||
      !formState.role
    ) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all the fields.",
      });
      return;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formState.email)
    ) {
      Toast.fire({
        icon: "warning",
        title: "Invalid email format.",
      });
      return;
    }
    if (formState.password.length < 8) {
      Toast.fire({
        icon: "warning",
        title: "Password must be at least 8 characters.",
      });
      return;
    }

    // Dispatch action to indicate request is loading
    dispatch({ type: REQUEST_LOADING });
    // Make POST request to register user
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}auth/register`, formState)
      .then((res) => {
        // Log the response data
        console.log(res.data);
        // Dispatch action to indicate request was successful
        dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        // Dispatch action to indicate request is pending
        dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
        Toast.fire({
          icon: "error",
          title: err.response.data.message,
        });
      });
      setFormState(initialState)
  };

  return (
    <div className="container flex justify-center items-center h-screen bg-gray-100 xl:text-lg">
      {/* Container for the registration form */}
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Header section */}
        <h2 className="font-lora text-xl md:text-3xl font-bold text-red-700 mb-2">
          Welcome to the Job Portal
        </h2>
        <p className="font-merry text-lg text-gray-800 mb-4">
          Create A Free Account
        </p>
        {/* Form for user registration */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username input field */}
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
              value={formState.username}
              id="username"
              onChange={handleChange}
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Email input field */}
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
              value={formState.email}
              id="email"
              onChange={handleChange}
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password input field with show/hide functionality */}
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
                value={formState.password}
                id="password"
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
                placeholder="Enter your password"
                required
              />
              {/* Button to show/hide password */}
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
          {/* Role selection dropdown */}
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
              value={formState.role}
              onChange={handleChange}
              className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base xl:text-lg"
            >
              <option value="">Select a role</option>
              <option value="candidate">Candidate</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
          {/* Footer section with login link and register button */}
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
              className="inline-flex font-lora justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 lg:text-md font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
