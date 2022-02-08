import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profileReducer, // profileReducer: profileReducer
  dialogsReducer, // dialogsReducer: dialogsReducer
  sidebarReducer, // sidebarReducer: sidebarReducer
  usersReducer,
  authReducer,
});

let store = createStore(reducers);

export default store;
