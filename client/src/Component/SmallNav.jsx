import React from "react";

const menuItems = [
  {
    name: "Candidate",
    href: "/candidate/create",
  },
  {
    name: "Education",
    href: "/candidate/education",
  },
  {
    name: "Experience",
    href: "/candidate/experience",
  },
];
const SmallNav = () => {
  return (
    <>
      <nav className="flex py-3 " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="ml-1 inline-flex font-merry cursor-pointer lg:text-xl font-medium text-gray-800 hover:underline md:ml-2"
              >
                {item.name}
              </a>
              <span className="mx-3 text-gray-800 text-md font-semibold ">
                /
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default SmallNav;
