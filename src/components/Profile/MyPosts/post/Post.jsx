import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.ava} alt="Ava" />
      {props.name}:
      <div>
        {props.message}
        <div>
          <span>Рейтинг:{props.reiting} ♥</span>
          <button>♥</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
