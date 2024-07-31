import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecuriter } from "../../Redux/Recuriter/Action/RecuriterAction";
import RecuriterCard from "./RecuriterCard";

const Recuriter = () => {
  const dispatch = useDispatch();
  const { loading, recuriter } = useSelector((store) => store.recuriterReducer);

  console.log(recuriter);

  console.log(recuriter.email);

  useEffect(() => {
    dispatch(getRecuriter);
  }, []);

  if (loading === "true") {
    return (
      <div className=" container flex justify-center items-center h-full ani">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-red-700"></div>
      </div>
    );
  }
  return (
    <div className="container">
      <RecuriterCard data={recuriter} />
    </div>
  );
};

export default Recuriter;
