import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Call reducer
import questionReducer from "./questionReducer";
import resultReducer from "./resultReducer";
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

// Create store with reducer
export default configureStore({ reducer: rootReducer });
