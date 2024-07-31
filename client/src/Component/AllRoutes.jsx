import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRecruter from "./../Recurter/Create/CreateRecruter";
import Login from "./../Auth/Login/Login";
import Register from "./../Auth/Register/Register";
import CreateCandidate from "./../Candidate/Create/CreateCandidate";
import CreateEducation from "./../Candidate/Education/CreateEducation";
import CreateExperience from "./../Candidate/Experience/CreateExperience";
import Home from "../Job/LandingPage/Home";
import Create from "../Job/Create/Create";
import Recuriter from "../Recurter/Display/Recuriter";
import Candidate from "../Candidate/Display/Candidate";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter/create" element={<CreateRecruter />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/candidate/create" element={<CreateCandidate />} />
        <Route path="/candidate/get-profile" element={<Candidate />} />
        <Route path="/candidate/education" element={<CreateEducation />} />
        <Route path="/candidate/experience" element={<CreateExperience />} />
        <Route path="/job/create" element={<Create />} />
        <Route path="/recruiter/get" element={<Recuriter />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
