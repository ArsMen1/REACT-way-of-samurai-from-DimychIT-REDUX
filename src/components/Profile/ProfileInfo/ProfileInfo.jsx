import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHoocks from "./ProfileStatusWithHoocks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <img
        src={
          props.profile.photos.large
            ? props.profile.photos.large
            : "https://playboyrussia.com/upload/medialibrary/cc4/cc4610b6aafdd66f4aee44cc4f7021ab.jpg"
        }
        alt=""
      />
      <div className={s.avaDis}>
        <div className={s.ava}>
          <img
            src={
              props.profile.photos.small ||
              "https://i07.fotocdn.net/s120/5ccfac92c7e414b4/gallery_s/2746596264.jpg"
            }
            alt=""
          />
        </div>
        <div className={s.description}>
          <div>{props.profile.fullName || "Осипов Арсен"}</div>
          <ProfileStatusWithHoocks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div>Поиск работы:</div>
          <div>
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : "Не установлено"}
          </div>
          <div>Контакты:</div>
          <div>
            <div className={s.link}>
              {
                props.profile.contacts.instagram ? ( //Отоюражается только при наличии
                  <a
                    href={props.profile.contacts.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                      alt=""
                    />
                  </a>
                ) : (
                  ""
                ) //Такую карточку нужно создать для каждого контакта НО ОДНОЙ КОМПОНЕНТОЙ
              }
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
