import axios from "axios";

const sessionData = window.sessionStorage;

// Constants for action types
export let REQUEST_LOADING = "request_loading";
export let REQUEST_SUCCESS = "request_success";
export let GET_REQUEST_SUCCESS = "get_request_success";
export let GET_SINGLE_REQUEST_SUCCESS = "get_single_request_success";
export let REQUEST_PENDING = "request_pending";

let token = JSON.parse(sessionData.getItem("adminToken"));

// GET JOB DATA FUNCTION
export const getJobData =  (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make GET request to fetch job data
  axios
    .get(`${process.env.REACT_APP_BASE_API_URL}job/get`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      // Log the response data
      // console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      // Log the error response
      // console.log(err);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};

// GET SINGLE JOB DATA FUNCTION
export const getSingleJobData = (id) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make GET request to fetch single job data
  axios
    .get(`${process.env.REACT_APP_BASE_API_URL}job/get-single/${id}`, {
      headers: {
        Authorization: `${token}`,
      },                            
    })
    .then((res) => {
      // Log the response data
      // console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: GET_SINGLE_REQUEST_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      // Log the error response
      // console.log(err);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};



// UPDATE JOB FUNCTION
export const updateJob = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make PATCH request to update job
  axios
    .patch(
      `${process.env.REACT_APP_BASE_API_URL}job/update-job/:id`,
      payload,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      // Log the response data
      // console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};

// DELETE JOB FUNCTION
export const deleteJob = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make DELETE request to delete job
  axios
    .delete(
      `${process.env.REACT_APP_BASE_API_URL}job/delete-job/:id`,
      payload,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      // Log the response data
      // console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};
