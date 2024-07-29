import { REQUEST_LOADING, REQUEST_PENDING, REQUEST_SUCCESS } from "../Action/AuthAction";

let initialState = {
  loading: false,
  error: null,
  message:'',
  success:null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        message:payload,
        success:"true"
      };

    case REQUEST_PENDING:
      return {
        ...state,
        loading: false,
        error: payload,
        success:"false"
      };
    default:
      return state;
  }
};
