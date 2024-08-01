import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidateData } from "../../Redux/Candidate/Action/CandidateAction";
import CandidateCard from "./CandidateCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

const Candidate = () => {
  const dispatch = useDispatch();
  const { loading, candidate } = useSelector((store) => store.candidateReducer);
  let { education, experience } = candidate;

  useEffect(() => {
    dispatch(getCandidateData);
  }, []);

  if (loading === "true") {
    return (
      <div className=" container flex justify-center items-center h-full ani">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-red-700"></div>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className=" font-lora text-xl lg:text-2xl font-bold mt-5 text-red-700 text-center">
        Personal Details{" "}
      </h1>
      <CandidateCard data={candidate} />

      <h1 className=" font-lora text-xl lg:text-2xl font-bold mt-10 text-red-700 text-center">
        Education Details{" "}
      </h1>
      {education &&
        education.map((el) => <EducationCard key={el._id} {...el} />)}

      <h1 className=" font-lora text-xl lg:text-2xl font-bold mt-10 text-red-700 text-center">
        Experience Details{" "}
      </h1>
      {experience &&
        experience.map((el) => <ExperienceCard key={el._id} {...el} />)}
    </div>
  );
};

export default Candidate;
