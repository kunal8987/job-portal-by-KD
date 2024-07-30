import axios from "axios";

const sessionData = window.sessionStorage;

// Constants for action types
export let REQUEST_LOADING = "request_loading";
export let REQUEST_SUCCESS = "request_success";
export let REQUEST_PENDING = "request_pending";

let token = JSON.parse(sessionData.getItem("adminToken"));



// ADD EDUCATION FUNCTION
export const addEducation = (payload) => (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make POST request to register user
  axios
    .patch(
      `${process.env.REACT_APP_BASE_API_URL}candidate/add-education`,
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

