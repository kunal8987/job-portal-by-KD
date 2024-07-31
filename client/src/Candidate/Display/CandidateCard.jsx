import React from "react";

const CandidateCard = ({ data }) => {
  return (
    <>
      <div className=" container flow-root border shadow-lg py-7 mt-10 ">
        <dl className="-my-3 divide-y divide-gray-300 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Title
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              Mr
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              {" "}
              Name
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.name}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Email
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.email}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              Phone Number
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.phone}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              State
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.state}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              City
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.city}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-lg font-merry text-gray-900">
              About Us
            </dt>
            <dd className="text-gray-700 text-lg font-merry sm:col-span-2">
              {data.about}
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

export default CandidateCard;
