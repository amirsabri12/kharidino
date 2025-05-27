import { ReactNode } from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

import styles from "./Header.module.css";

const navItem = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
  { title: "امکانات پیشرفته", href: "/Advanced features" },
  { title: "ثبت نام", href: "/Signup" },
];

function Header(): ReactNode {
  return (
    <div className={styles["header"]}>
      <nav>
        <ul>
          {navItem.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
