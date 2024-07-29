import axios from "axios";
const sessionData = window.sessionStorage;
// Constants for action types
export let REQUEST_LOADING = "request_loading";
export let REQUEST_SUCCESS = "request_success";
export let REQUEST_PENDING = "request_pending";

// Action creator for adding a user
export const addUser = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make POST request to register user
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}auth/register`, payload)
    .then((res) => {
      // Log the response data
      console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};

// Action creator for login a user
export const loginUser = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make POST request to register user
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}auth/login`, payload)
    .then((res) => {
      // Log the response data
      console.log(res.data);
      sessionData.setItem("adminToken", JSON.stringify(res.data.data.token));
      sessionData.setItem("userRole", JSON.stringify(res.data.data.user.role));
      // Dispatch action to indicate request was successful
      dispatch({ type: REQUEST_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};
