import {
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../Action/JobAction";

let initialState = {
  loading: "false",
  error: null,
  message: "",
  job: [],
};

export const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_LOADING:
      return { ...state, loading: "true" };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: "false",
        message: payload,
      };
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        loading: "false",
        job: payload,
      };
    case REQUEST_PENDING:
      return { ...state, loading: "false", error: payload };
    default:
      return state;
  }
};
