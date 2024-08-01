import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobData } from "../../Redux/Job/Action/JobAction";
import JobCard from "./JobCard";

const Candidate = () => {
  const dispatch = useDispatch();
  const { loading, job } = useSelector((store) => store.jobReducer);

  // console.log(job);

  useEffect(() => {
    dispatch(getJobData);
  }, []);

  if (loading === "true") {
    return (
      <div className=" container flex justify-center items-center h-full ani">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-red-700"></div>
      </div>
    );
  }
  return (
    <div className="container mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 ">
      {job.length > 0 && job.map((el) => <JobCard key={el._id} {...el} />)}
    </div>
  );
};

export default Candidate;
