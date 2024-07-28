import {
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
    case REQUEST_PENDING:
      return { ...state, loading: "false", error: payload };
    default:
      return state;
  }
};
