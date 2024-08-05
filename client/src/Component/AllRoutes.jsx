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
import PrivateRoutes from "../Context/PrivateRoutes";
import Apply from "../Job/Apply/Apply";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorPage />} />
        {/* Recruiter creation route */}
        <Route
          path="/recruiter/create"
          element={
            <PrivateRoutes>
              {" "}
              <CreateRecruter />
            </PrivateRoutes>
          }
        />
        {/* Login route */}
        <Route path="/auth/login" element={<Login />} />
        {/* Registration route */}
        <Route path="/auth/register" element={<Register />} />
        {/* Candidate creation route */}
        <Route
          path="/candidate/create"
          element={
            <PrivateRoutes>
              {" "}
              <CreateCandidate />
            </PrivateRoutes>
          }
        />
        {/* Candidate profile route */}
        <Route
          path="/candidate/get-profile"
          element={
            <PrivateRoutes>
              {" "}
              <Candidate />
            </PrivateRoutes>
          }
        />
        {/* Candidate education creation route */}
        <Route
          path="/candidate/education"
          element={
            <PrivateRoutes>
              {" "}
              <CreateEducation />
            </PrivateRoutes>
          }
        />
        {/* Candidate experience creation route */}
        <Route
          path="/candidate/experience"
          element={
            <PrivateRoutes>
              {" "}
              <CreateExperience />
            </PrivateRoutes>
          }
        />
        {/* Job creation route */}
        <Route
          path="/job/create"
          element={
            <PrivateRoutes>
              {" "}
              <Create />
            </PrivateRoutes>
          }
        />
        {/* All jobs display route */}
        <Route
          path="/job/get/all-jobs"
          element={
            <PrivateRoutes>
              {" "}
              <Job />
            </PrivateRoutes>
          }
        />
        {/* Single job display route */}
        <Route
          path="/get/single-job/:id"
          element={
            <PrivateRoutes>
              {" "}
              <SingleJob />
            </PrivateRoutes>
          }
        />
        {/* Recruiter display route */}
        <Route
          path="/recruiter/get"
          element={
            <PrivateRoutes>
              {" "}
              <Recuriter />
            </PrivateRoutes>
          }
        />
        {/* Recruiter's posted jobs display route */}
        <Route
          path="/recruiter/get-job"
          element={
            <PrivateRoutes>
              {" "}
              <PostedJob />
            </PrivateRoutes>
          }
        />
        <Route
          path="/job/apply-job"
          element={
            <PrivateRoutes>
              {" "}
              <Apply />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
