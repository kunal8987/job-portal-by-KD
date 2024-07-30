import React, { useState } from "react";
import { Toast } from "../../Component/Alert";
import { useDispatch} from "react-redux";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../../Redux/Recuriter/Action/RecuriterAction";
import axios from "axios";
import { token } from "../../Component/Token";



// const sessionData = window.sessionStorage;


let initialState = {
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
};


function CreateRecruter() {


  const [formState, setFormState] = useState(initialState);

  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // let token = JSON.parse(sessionData.getItem("adminToken"));

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, company, phone, email } = formState;

    // Simple validation
    if (!firstName || !lastName || !company || !phone || !email) {
      Toast.fire({
        icon: "warning",
        title: "All fields are required.",
      });
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Toast.fire({
        icon: "warning",
        title: "Please enter a valid email address.",
      });
      return;
    }

    // Validate phone number (example: must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      Toast.fire({
        icon: "warning",
        title: "Please enter a valid 10-digit phone number.",
      });
      return;
    }

    // Dispatch action to indicate request is loading
    dispatch({ type: REQUEST_LOADING });
    // Make POST request to register user
    axios
      .post(
        `${process.env.REACT_APP_BASE_API_URL}recuriter/create`,
        formState,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // Dispatch action to indicate request was successful
        dispatch({ type: REQUEST_SUCCESS, payload: res.data.data });
        Toast.fire({
          icon: "success",
          title: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // Dispatch action to indicate request is pending
        dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
        Toast.fire({
          icon: "error",
          title: err.response.data.message,
        });
      });

    // If all validations pass, proceed with form submission
    console.log("Form submitted successfully", formState);
  };

  return (
    <div className="container bg-gray-100 pb-5 ">
      <h1 className="text-xl lg:p-8 text-center font-bold  xl:text-2xl 2xl:text-3xl font-merry text-gray-800 mb-4">
        Recruiter Details
      </h1>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fHww"
            alt="Recruiter Profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-4">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border  shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border  shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
            </div>
            <button
              type="submit"
              className="w-full flex font-lora justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRecruter;
