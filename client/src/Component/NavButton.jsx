import React, { useContext } from "react";
import { AuthContext } from "./../Context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const NavButton = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  let handleClick = () => {
    logoutUser();
    navigate("/auth/login");
  };
  return (
    <div className="container space-x-5 mt-4 lg:mt-0 ">
      {authState.isAuth === true ? (
        <button
          onClick={handleClick}
          className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
        >
          Logout
        </button>
      ) : (
        <>
          <Link to={"/auth/login"}>
            <button
              type="button"
              className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
            >
              Login
            </button>
          </Link>
          <Link to={"/auth/register"}>
            <button
              type="button"
              className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
            >
              Register
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavButton;
