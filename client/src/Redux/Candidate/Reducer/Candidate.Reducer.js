import {
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../Action/CandidateAction";

let initialState = {
  loading: "false",
  error: null,
  message: "",
  candidate: [],
};

export const candidateReducer = (state = initialState, { type, payload }) => {
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
        candidate: payload,
      };
    case REQUEST_PENDING:
      return { ...state, loading: "false", error: payload };
    default:
      return state;
  }
};
