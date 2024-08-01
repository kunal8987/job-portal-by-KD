import React from "react";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <section className="bg-gray-50 container mb-12">
        <div className="mx-auto max-w-screen-xl px-4 py-25 lg:flex lg:h-full mt-16 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-lora font-extrabold sm:text-5xl">
              Connecting Talent with Opportunities.
              <strong className="font-extrabold font-lora text-red-700 sm:block">
                {" "}
                Explore Job Listings.{" "}
              </strong>
            </h1>

            <p className="mt-4 font-merry sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full font-lora rounded bg-red-600 px-12 py-3 text-sm lg:text-lg font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/auth/login"
              >
                Get Started
              </Link>

              <Link
                className="block w-full font-merry rounded px-12 py-3 text-sm lg:text-lg font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                to="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
