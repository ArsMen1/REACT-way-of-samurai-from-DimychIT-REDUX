import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profileReducer, // profileReducer: profileReducer
  dialogsReducer, // dialogsReducer: dialogsReducer
  sidebarReducer, // sidebarReducer: sidebarReducer
  usersReducer,
  authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
