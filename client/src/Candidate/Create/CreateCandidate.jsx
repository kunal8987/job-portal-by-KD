import React, { useState } from "react";
import { Toast } from "../../Component/Alert";
import { addCandidate } from "../../Redux/Candidate/Action/CandidateAction";
import { useDispatch, useSelector } from "react-redux";

// Initial state for the form
const initialState = {
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  about: "",
  skills: [],
};

// CreateCandidate component
function CreateCandidate() {
  // State for the form
  const [formState, setFormState] = useState(initialState);
  // State for the skills
  const [skills, setSkills] = useState(initialState.skills); // Corrected initialization

  // Selecting error and message from the store
  const { error, message } = useSelector((store) => {
    return store.candidateReducer;
  });
  // Dispatch function
  const dispatch = useDispatch();

  // Function to handle adding a skill
  const handleAddSkill = (e) => {
    e.preventDefault();
    const skill = document.getElementById("skillInput").value;
    if (skill) {
      const updatedSkills = [...skills, skill]; // Create a new array with the added skill
      setSkills(updatedSkills); // Update the skills state
      setFormState({ ...formState, skills: updatedSkills }); // Update formState with new skills
      document.getElementById("skillInput").value = "";
    }
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { name, email, phone, state, city, about } = formState;
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidPhone = /^\d{10}$/;

      // Validation checks
      if (!name || !email || !phone || !state || !city || !about) {
        Toast.fire({
          icon: "warning",
          title: "Please fill in all the fields.",
        });
        return;
      }

      if (!isValidEmail.test(email)) {
        Toast.fire({
          icon: "warning",
          title: "Invalid email format.",
        });
        return;
      }

      if (!isValidPhone.test(phone)) {
        Toast.fire({
          icon: "warning",
          title: "Invalid phone number format.",
        });
        return;
      }

      if (skills.length === 0) {
        Toast.fire({
          icon: "warning",
          title: "Please add at least one skill.",
        });
        return;
      }
      // Dispatching the action to add a candidate
      await dispatch(addCandidate(formState));
      if (message) {
        Toast.fire({
          icon: "success",
          title: message,
        });
        setFormState(initialState);
        return;
      }
    } catch (error) {
      if (error) {
        Toast.fire({
          icon: "error",
          title: error,
        });
        setFormState(initialState);
        return;
      }
    }

    console.log(formState, skills);
  };

  return (
    <div className="container bg-gray-100 pb-5">
      {/* Heading for the candidate details section */}
      <h1 className="text-xl p-3 lg:p-8 text-center font-bold lg:text-2xl 2xl:text-3xl font-lora text-gray-800 mb-2">
        Candidate Details
      </h1>
      {/* Flex container for the form and image */}
      <div className="flex gap-5 flex-col lg:flex-row">
        {/* Image container */}
        <div className="w-full lg:w-1/2 ">
          {/* Image for the candidate profile */}
          <img
            src="https://images.unsplash.com/photo-1471400974796-1c823d00a96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlYnNpdGV8ZW58MHwxfDB8fHww"
            alt="Candidate Profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Form container */}
        <div className="w-full lg:w-1/2 lg:ml-4">
          {/* Form for adding candidate details */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              {/* Form fields for candidate details */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
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
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formState.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formState.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="about"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  About
                </label>
                <textarea
                  name="about"
                  id="about"
                  value={formState.about}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="skills"
                  className="block text-sm font-merry font-medium text-gray-700 sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
                >
                  Skills
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="skillInput"
                    placeholder="Add Skill"
                    className="mt-1 block w-full border shadow-sm py-2 px-3 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-2"
                  />
                  <button
                    onClick={handleAddSkill}
                    className="w-full flex font-lora justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Skill
                  </button>
                  <div className="mt-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Submit button for creating candidate profile */}
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

export default CreateCandidate;
