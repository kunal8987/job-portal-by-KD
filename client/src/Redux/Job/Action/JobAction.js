import axios from "axios";

const sessionData = window.sessionStorage;

// Constants for action types
export let REQUEST_LOADING = "request_loading";
export let REQUEST_SUCCESS = "request_success";
export let REQUEST_PENDING = "request_pending";

let token = JSON.parse(sessionData.getItem("adminToken"));

// ADD JOB FUNCTION
export const addJob = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make POST request to register job
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}job/create`, payload, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      // Log the response data
      console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      console.log(err.response);
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
