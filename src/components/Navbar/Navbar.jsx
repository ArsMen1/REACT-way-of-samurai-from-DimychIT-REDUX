import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
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
        <NavLink to="/news" activeClassName={s.activeLink}>
          Новости
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Музыка
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Настройки
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Друзья
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
