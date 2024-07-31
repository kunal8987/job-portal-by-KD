import React, { useState } from "react";
import { Toast } from "../../Component/Alert";
import { useDispatch, useSelector } from "react-redux";
import SmallNav from "../../Component/SmallNav";
import { token } from "./../../Component/Token";
import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "./../../Redux/Candidate/Action/CandidateAction";

let initialState = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  startDate: "",
  endDate: "",
};
function CreateEducation() {
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
      !formState.institution ||
      !formState.degree ||
      !formState.fieldOfStudy ||
      !formState.startDate
    ) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all the fields.",
      });
      return;
    }

    // Dispatch action to indicate request is loading
    dispatch({ type: REQUEST_LOADING });
    // Make POST request to register user
    axios
      .patch(
        `${process.env.REACT_APP_BASE_API_URL}candidate/add-education`,
        formState,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
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
        // console.log(err.response.data.message);
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
    <div className="container bg-gray-100 pb-5">
      <SmallNav />
      <h1 className="text-xl p-3 lg:p-8 text-center font-bold lg:text-2xl 2xl:text-3xl font-lora text-red-700 mb-2">
        Education Details
      </h1>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 ">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt="Candidate Education"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  htmlFor="institution"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  value={formState.institution}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="degree"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  value={formState.degree}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="fieldOfStudy"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Field of Study
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  id="fieldOfStudy"
                  value={formState.fieldOfStudy}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Start Date
                </label>
                <input
                  type="text"
                  name="startDate"
                  placeholder="ex:- Jan-2022"
                  id="startDate"
                  value={formState.startDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="endDate"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  End Date
                </label>
                <input
                  type="text"
                  name="endDate"
                  placeholder="ex:- Jan-2023"
                  id="endDate"
                  value={formState.endDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex font-lora justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Education
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEducation;
