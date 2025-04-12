import styles from "./Footer.module.css";
import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { Link } from "react-router";

function Footer(): ReactNode {
  const links = [
    { id: 1, title: "اطلاعات" },
    { id: 2, title: "امکانات اضافی" },
    { id: 3, title: "حساب کاربری من" },
    { id: 4, title: "پرسش‌های متداول" },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="kharidino" />
      </div>

      <div className={styles.contact}>
        تماس با پشتیبانی: <Link to="tel:0123456789">0123456789</Link>
      </div>

      <div className={styles.address}>آدرس</div>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} to={"#"}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className={styles.socials}>
        <Link to="#">
          <FaTelegramPlane />
        </Link>
        <Link to="#">
          <FaInstagram />
        </Link>
        <Link to="#">
          <FaLinkedin />
        </Link>
        <Link to="#">
          <FaYoutube />
        </Link>
      </div>

      <div className={styles.copyright}>
        کلیه حقوق این وبسایت متعلق به شرکت .... می‌باشد.
      </div>
    </footer>
  );
}

export default Footer;
