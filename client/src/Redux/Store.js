import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer/AuthReducer";
import { candidateReducer } from "./Candidate/Reducer/Candidate.Reducer";
import { jobReducer } from "./Job/Reducer/JobReducer";
import { recuriterReducer } from "./Recuriter/Reducer/RecuriterReducer";

let rootReducer = combineReducers({
  authReducer,
  candidateReducer,
  jobReducer,
  recuriterReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
