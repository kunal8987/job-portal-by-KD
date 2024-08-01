import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ title, description, company, salary }) => {
  return (
    <>
      <article className=" shadow-md rounded-xl border-2 border-gray-200 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2021/10/18/23/07/hiring-6722314_640.png"
              className="size-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <p className="hover:underline">{title}</p>
            </h3>

            <p className="line-clamp-2 text-sm text-gray-700">{description}</p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="text-xs">Salary:-</span>
                <p className="text-xs">Rs {salary}</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                Posted by:-
                <Link
                  to="#"
                  className="font-medium underline mx-1 hover:text-gray-700"
                >
                  {company}
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-700 hover:bg-red-500 px-3 py-1.5 text-white">
            <button className="text-sm font-lora font-medium md:text-lg">
              Apply
            </button>
          </strong>
        </div>
      </article>
    </>
  );
};

export default JobCard;
