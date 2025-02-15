import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "./../Context/AuthContextProvider";
import NavButton from "./NavButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { authState } = useContext(AuthContext);

  let menuItems;

  if (authState.isAuth && authState.user === "candidate") {
    menuItems = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Create Profile",
        href: "/candidate/create",
      },
      {
        name: "Profile",
        href: "/candidate/get-profile",
      },
      {
        name: "Jobs",
        href: "/job/get/all-jobs",
      },
    ];
  } else if (authState.isAuth && authState.user === "recruiter") {
    menuItems = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Create Profile",
        href: "/recruiter/create",
      },
      {
        name: "Profile",
        href: "/recruiter/get",
      },
      {
        name: "Create Jobs",
        href: "/job/create",
      },
      {
        name: "Jobs",
        href: "/recruiter/get-job",
      },
    ];
  } else {
    menuItems = [
      {
        name: "Home",
        href: "/",
      },
    ];
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" container py-3 w-full bg-white top-0 sticky z-30 border shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold font-lora md:text-2xl text-red-700">
            Job-Portal
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex  space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`md:text-xl font-medium font-lora underline-offset-4  text-gray-800 hover:text-gray-900 ${
                    window.location.pathname === item.href ? "underline" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <NavButton />
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold sm:text-lg">Job-Portal</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <NavButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
