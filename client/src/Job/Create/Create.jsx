import React, { useState } from "react";
import { Toast } from "../../Component/Alert";
import { useDispatch } from "react-redux";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../../Redux/Job/Action/JobAction";
import { token } from "./../../Component/Token";
import axios from "axios";

let initialState = {
  title: "",
  company: "",
  description: "",
  location: "",
  salary: "",
  responsibilities: "",
  requirements: "",
};

const Create = () => {
  const [formState, setFormState] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formState.title ||
      !formState.company ||
      !formState.description ||
      !formState.location ||
      !formState.salary ||
      !formState.responsibilities ||
      !formState.requirements
    ) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all the fields.",
      });
      return;
    }

    // Dispatch action to indicate request is loading
    dispatch({ type: REQUEST_LOADING });
    // Make POST request to register job
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}job/create`, formState, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        // Log the response data
        // console.log(res.data);
        // Dispatch action to indicate request was successful
        dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      })
      .catch((err) => {
        // console.log(err.response);
        // Dispatch action to indicate request is pending
        dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
        Toast.fire({
          icon: "error",
          title: err.response.data.message,
        });
      });
    setFormState(initialState);
  };

  return (
    <>
      <div className="container bg-gray-50 lg:pb-10">
        {/* Heading for the candidate details section */}
        <h1 className="text-xl p-3 lg:p-8 text-center font-bold lg:text-2xl 2xl:text-3xl font-lora text-red-700 mb-2">
          Job Details
        </h1>
        {/* Flex container for the form */}
        <div className="flex justify-center flex-col lg:flex-row">
          {/* Form container */}
          <div className="w-full lg:w-1/2 lg:ml-4">
            {/* Form for adding candidate details */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                {/* Form fields for candidate details */}
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formState.title}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formState.description}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formState.company}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formState.location}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="salary"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Salary
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value={formState.salary}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="requirement"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    id="requirements"
                    value={formState.requirements}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="responsibilities"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Responsibilities
                  </label>
                  <textarea
                    name="responsibilities"
                    id="responsibilities"
                    value={formState.responsibilities}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
              </div>
              {/* Submit button for creating candidate profile */}
              <button
                type="submit"
                className="w-full flex font-lora justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
