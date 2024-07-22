import React from "react";

function CreateRecruter() {
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
          <form className="space-y-6">
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
