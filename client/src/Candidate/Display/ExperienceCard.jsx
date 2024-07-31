import React from "react";

const ExperienceCard = ({title,company,startDate,endDate}) => {
  return (
    <>
      <div className=" container flow-root border shadow-lg py-7 mt-10 ">
        <dl className="-my-3 divide-y divide-gray-300 text-sm">
          
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              {" "}
              Title
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {title}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Company
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {company}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Start Date
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {startDate}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              End Date
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {endDate}
            </dd>
          </div>
        </dl>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="rounded-md bg-red-700 px-4 py-2 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
