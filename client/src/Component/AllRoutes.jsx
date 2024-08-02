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
import Job from "../Job/Display/Job";
import SingleJob from "../Job/Single Job/SingleJob";
import PostedJob from "../Recurter/Posted job/PostedJob";
import ErrorPage from "./ErrorPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorPage />} />
        {/* Recruiter creation route */}
        <Route path="/recruiter/create" element={<CreateRecruter />} />
        {/* Login route */}
        <Route path="/auth/login" element={<Login />} />
        {/* Registration route */}
        <Route path="/auth/register" element={<Register />} />
        {/* Candidate creation route */}
        <Route path="/candidate/create" element={<CreateCandidate />} />
        {/* Candidate profile route */}
        <Route path="/candidate/get-profile" element={<Candidate />} />
        {/* Candidate education creation route */}
        <Route path="/candidate/education" element={<CreateEducation />} />
        {/* Candidate experience creation route */}
        <Route path="/candidate/experience" element={<CreateExperience />} />
        {/* Job creation route */}
        <Route path="/job/create" element={<Create />} />
        {/* All jobs display route */}
        <Route path="/job/get/all-jobs" element={<Job />} />
        {/* Single job display route */}
        <Route path="/get/single-job/:id" element={<SingleJob />} />
        {/* Recruiter display route */}
        <Route path="/recruiter/get" element={<Recuriter />} />
        {/* Recruiter's posted jobs display route */}
        <Route path="/recruiter/get-job" element={<PostedJob />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
