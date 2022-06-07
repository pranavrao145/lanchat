import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
  messages: messagesReducer,
});

export default reducers;
