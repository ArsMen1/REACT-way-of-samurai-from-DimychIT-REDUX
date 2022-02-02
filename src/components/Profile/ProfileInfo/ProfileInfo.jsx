import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <img
        src="https://playboyrussia.com/upload/medialibrary/cc4/cc4610b6aafdd66f4aee44cc4f7021ab.jpg"
        alt="Home"
      />
      <div className={s.avaDis}>
        <div className={s.ava}>
          <img src={props.profile.photos.large} alt="ava" />
        </div>
        <div className={s.description}>
          <div className="me">
            {props.profile.fullName ? props.profile.fullName : "Осипов Арсен"}
          </div>
          <div className={s.status}>Мечтаю</div>
          <div className="me">Дата рождения:</div>
          <div className="me">08/03/1998г</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
