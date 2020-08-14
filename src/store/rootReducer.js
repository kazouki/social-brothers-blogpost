import { combineReducers } from "redux";
import post from "./post/reducer";
import form from "./form/reducer";

export default combineReducers({
  post,
  form,
});
