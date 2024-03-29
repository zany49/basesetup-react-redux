import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
// import { LOGOUT_ACTION } from '../actions/authActions';
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  // Your reducers go here
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
