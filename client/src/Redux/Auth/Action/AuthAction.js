import axios from "axios";

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
      dispatch({ type: REQUEST_SUCCESS });
    })
    .catch((err) => {
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING });
    });
};
