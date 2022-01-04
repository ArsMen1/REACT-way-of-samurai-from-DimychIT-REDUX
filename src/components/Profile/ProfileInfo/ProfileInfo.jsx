import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <img
        src="https://playboyrussia.com/upload/medialibrary/cc4/cc4610b6aafdd66f4aee44cc4f7021ab.jpg"
        alt="Home"
      />
      <div className={s.avaDis}>
        <div className={s.ava}>
          <img
            src="https://fs1.inspider.ru/photo/2013/03/28/a97d5cc5ca99fb659ff6522f95c92bc0.jpg"
            alt="ava"
          />
        </div>
        <div className={s.description}>
          <div className="me">Осипов Арсен</div>
          <div className={s.status}>Мечтаю</div>
          <div className="me">Дата рождения:</div>
          <div className="me">08/03/1998г</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
