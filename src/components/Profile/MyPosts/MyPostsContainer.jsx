import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import SoreContext from "./storeContext/StoreContext";

const MyPostsContainer = () => {
  return (
    <SoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profileReducer.posts}
            newPostText={state.profileReducer.newPostText}
          />
        );
      }}
    </SoreContext.Consumer>
  );
};

export default MyPostsContainer;
