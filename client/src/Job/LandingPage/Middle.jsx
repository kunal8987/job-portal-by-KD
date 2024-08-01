import React from "react";

const Middle = () => {
  return (
    <>
      <section className="bg-white container mb-10">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold font-lora text-red-700 sm:text-4xl">
              Trusted by Our Partner
            </h2>

            <p className="mt-4 text-gray-500 font-merry sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-merry font-medium text-gray-500">
                  Total Company
                </dt>

                <dd className="text-4xl font-extrabold font-merry text-blue-600 md:text-5xl">
                  125+
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-merry font-medium text-gray-500">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold font-merry text-blue-600 md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-merry font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold font-merry text-blue-600 md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middle;
