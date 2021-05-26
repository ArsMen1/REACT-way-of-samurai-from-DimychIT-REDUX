import s from "./MyPosts.module.css";
import Post from "./post/Post";
import React from "react";


const MyPosts = (props) => {

    const postsElement = props.posts.map(p => <Post message={p.message} reiting={p.likeCount} name={p.name}
                                                    ava={p.ava}/>)

    const newPostsElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        const text = newPostsElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            <h2>Новый пост </h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElement} className={s.newPost}
                          value={props.newPostText}/>
                <button onClick={addPost}>Опубликовать</button>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
