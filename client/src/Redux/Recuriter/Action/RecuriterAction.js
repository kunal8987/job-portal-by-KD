import axios from "axios";

const sessionData = window.sessionStorage;

// Constants for action types
export let REQUEST_LOADING = "request_loading";
export let REQUEST_SUCCESS = "request_success";
export let GET_REQUEST_SUCCESS = "get_request_success";
export let REQUEST_PENDING = "request_pending";

let token = JSON.parse(sessionData.getItem("adminToken"));

// GET RECURITER FUNCTION
export const getRecuriter = (dispatch) => {
  // Dispatch action to indicate request is loading
  dispatch({ type: REQUEST_LOADING });
  // Make POST request to register user
  axios
    .get(`${process.env.REACT_APP_BASE_API_URL}recuriter/get`,{
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      // Log the response data
      console.log(res.data);
      // Dispatch action to indicate request was successful
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      // console.log(err.response.data.message);
      // Dispatch action to indicate request is pending
      dispatch({ type: REQUEST_PENDING, payload: err.response.data.message });
    });
};
