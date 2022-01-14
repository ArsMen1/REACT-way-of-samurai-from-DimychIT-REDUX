import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsOnln from "../AllFriends/FriendsOnline/FriendsOnln";
import React from "react";

const Navbar = (props) => {
  const friendElements = props.state.friend.map((f) => (
    <FriendsOnln ava={f.ava} name={f.name} />
  ));
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Моя страница
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Сообщения
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" activeClassName={s.activeLink}>
          Новости
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music" activeClassName={s.activeLink}>
          Музыка
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings" activeClassName={s.activeLink}>
          Настройки
        </NavLink>
      </div>
      <div className={s.friends}>
        <NavLink to="/Friends" activeClassName={s.activeLink}>
          Друзья Онлайн
        </NavLink>
        {friendElements}
      </div>
    </nav>
  );
};
export default Navbar;
