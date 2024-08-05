import React, { useState } from "react";
import { Toast } from "../../Component/Alert";

let initialState = {
  letter: "",
  resume: "",
};
const Apply = () => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.letter || !formState.resume) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all the fields.",
      });
      return;
    }

    Toast.fire({
      icon: "success",
      title: "Apply Successfully",
    });
    console.log("Form submitted successfully:", formState);
    // Reset the form state after submission
    setFormState(initialState);
  };
  return (
    <>
      <div className="container bg-gray-50 lg:pb-10">
        {/* Heading for the candidate details section */}
        <h1 className="text-xl p-3 lg:p-8 text-center font-bold lg:text-2xl 2xl:text-3xl font-lora text-red-700 mb-2">
          Apply Job
        </h1>
        {/* Flex container for the form */}
        <div className="flex justify-center flex-col lg:flex-row">
          {/* Form container */}
          <div className="w-full lg:w-1/2 lg:ml-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                {/* Form fields for candidate details */}
                <div className="mb-4">
                  <label
                    htmlFor="letter"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    name="letter"
                    id="letter"
                    placeholder="Write A Cover Letter That Highlight Your Skills, Project, Experience. "
                    value={formState.letter}
                    onChange={handleChange}
                    spellCheck="true"
                    required
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                  >
                    Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    value={formState.resume}
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
