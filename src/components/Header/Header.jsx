import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://camo.githubusercontent.com/48fff2a348143da7155275645da575b81276b9810d1e9f8b38547e34c9aaacb8/68747470733a2f2f7376672e6769746875622e696f2f7376676f2d6c6f676f2e737667"
        alt="Логотип"
      ></img>
    </header>
  );
};

export default Header;
