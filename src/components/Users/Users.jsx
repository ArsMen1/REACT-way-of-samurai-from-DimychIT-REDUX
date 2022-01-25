import s from "./Users.module.css";
import React from "react";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i07.fotocdn.net/s120/5ccfac92c7e414b4/gallery_s/2746596264.jpg",
        followed: false,
        fullName: "Arsen",
        status: "Привет, как дела?)",
        location: { city: "Пятигорск", country: "Россия" },
      },
      {
        id: 2,
        photoUrl:
          "https://i07.fotocdn.net/s120/5ccfac92c7e414b4/gallery_s/2746596264.jpg",
        followed: false,
        fullName: "Вика",
        status: "Привет",
        location: { city: "Ставрополь", country: "Россия" },
      },
      {
        id: 3,
        photoUrl:
          "https://i07.fotocdn.net/s120/5ccfac92c7e414b4/gallery_s/2746596264.jpg",
        followed: true,
        fullName: "Кристина",
        status: "Как дела?)",
        location: { city: "Москва", country: "Россия" },
      },
      {
        id: 4,
        photoUrl:
          "https://i07.fotocdn.net/s120/5ccfac92c7e414b4/gallery_s/2746596264.jpg",
        followed: true,
        fullName: "Влад",
        status: "Кто тут?",
        location: { city: "Ростов", country: "Россия" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="ava" className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>

              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
