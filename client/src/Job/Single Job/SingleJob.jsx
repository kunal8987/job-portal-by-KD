import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleJobData } from "../../Redux/Job/Action/JobAction";

const SingleJob = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { loading, single } = useSelector((store) => {
    return store.jobReducer;
  });

  //   console.log(single);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleJobData(id));
  }, []);

  if (loading === "true") {
    return (
      <div className=" container flex justify-center my-52 items-center h-full ani">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-red-700"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className=" font-lora text-xl lg:text-2xl font-bold mt-5 text-red-700 text-center">
        Job Details
      </h1>
      <div className=" container flow-root border shadow-lg py-7 mt-10 ">
        <dl className=" -my-3 divide-y divide-gray-300 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Title
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.title}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Location
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.location}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Salary
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.salary}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Company
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.company}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Description
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.description}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Requirements
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.requirements}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Responsibilities
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.responsibilities}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Recuriter Email
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {single.authEmail}
            </dd>
          </div>
        </dl>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              navigate("/job/apply-job");
            }}
            className="rounded-md bg-red-700 px-4 font-lora py-2 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
