import s from "./MyPosts.module.css";
import Post from "./post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newPostText"}
        component={Textarea}
        placeholder="Введите новое сообщение"
        validate={[required, maxLength30, minLength4]}
      />
      <button>Опубликовать</button>
    </form>
  );
};

const AddNewPostForm = reduxForm({
  form: "addPostForm", // уникальное имя формы
})(AddPostForm);

const MyPosts = (props) => {
  const postsElement = props.posts.map((p) => (
    <Post message={p.message} reiting={p.likeCount} name={p.name} ava={p.ava} />
  ));

  const addNewPost = (post) => {
    props.addPost(post.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h2>Новый пост </h2>
      <div>
        <AddNewPostForm onSubmit={addNewPost} />
        <div className={s.posts}>{postsElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
