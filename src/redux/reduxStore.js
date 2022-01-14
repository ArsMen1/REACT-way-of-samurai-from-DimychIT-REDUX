import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profileReducer, //  profileReducer: profileReducer
  dialogsReducer, // dialogsReducer: dialogsReducer
  sidebarReducer, // sidebarReducer: sidebarReducer
});

let store = createStore(reducers);

export default store;
