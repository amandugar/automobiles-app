import { combineReducers } from "redux";
import imageClassReducer from "./reducers/imageClassReducer";

const rootReducer = combineReducers({
  imageClass: imageClassReducer,
});

export default rootReducer;
