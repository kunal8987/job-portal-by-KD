import React from "react";

const CreateRecruter = () => {
  return (
    <div className="container">
      <h2 className="font-lora text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Welcome to The Recruiter Form
      </h2>
      <form className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block font-merry text-lg font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base lg:text-lg xl:text-xl"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block font-merry text-lg font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base lg:text-lg xl:text-xl"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-4">
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
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base lg:text-lg xl:text-xl"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block font-merry text-lg font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base lg:text-lg xl:text-xl"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block font-merry text-lg font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-base lg:text-lg xl:text-xl"
            placeholder="Enter your company name"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex font-lora justify-center rounded-lg border border-transparent bg-blue-500 py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRecruter;
