import React, { useState } from "react";
import { Toast } from "../../Component/Alert";
import { useDispatch, useSelector } from "react-redux";



const initialState = {
  title: "",
  company: "",
  startDate: "",
  endDate: "",
};

function CreateExperience() {
  const [formState, setFormState] = useState(initialState);
 
  const dispatch = useDispatch()

  const {error , message} = useSelector((store)=>{
    return store.candidateReducer
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title || !formState.company || !formState.startDate ) {
      Toast.fire({
        icon: "warning",
        title: "Please fill in all the fields.",
      });
      return;
    }
    console.log(formState)
  };



  return (
    //  Container for the experience details form
    <div className="container bg-gray-100 pb-5">
       {/* Heading for the experience details section */}
      <h1 className="text-xl p-3 lg:p-8 text-center font-bold lg:text-2xl 2xl:text-3xl font-lora text-gray-800 mb-2">
        Experience Details
      </h1>
       {/* Flex container for the form and image */}
      <div className="flex gap-5 flex-col lg:flex-row">
         {/* Image container */}
        <div className="w-full lg:w-1/2 ">
           {/* Image for the experience section */}
          <img
            src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmt8ZW58MHx8MHx8fDA%3D"
            alt="Candidate Experience"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
         {/* Form container */}
        <div className="w-full lg:w-1/2">
           {/* Form for adding experience details */}
          <form className="space-y-6" onSubmit={handleSubmit}>
             {/* Form fields for title, company, start year and end year */}
            <div className="flex flex-col">
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
                  htmlFor="startDate"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Start Year
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
                  End Year
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
             {/* Submit button for adding experience */}
            <button
              type="submit"
              className="w-full flex font-lora justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Experience
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateExperience;
