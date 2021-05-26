import reportWebVitals from "./reportWebVitals";
import state, {subscribe} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter> 
            <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText} dialogsPage={state.dialogsPage}/>
        </BrowserRouter>, document.getElementById("root"));
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
