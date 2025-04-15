
import styles from "./Footer.module.css";
import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";
import { Link } from "react-router";

const links = [
  { href: "/Information", title: "اطلاعات" },
  { href: "/Additional features", title: "امکانات اضافی" },
  { href: "/My account", title: "حساب کاربری من" },
  { href: "/Questions", title: "پرسش‌های متداول" },
];

function Footer(): ReactNode {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="" alt="" />
        <h2>kharidino |خریدی نو</h2>
      </div>

      <div className={styles.contact}>
        تماس با پشتیبانی: <Link to="tel:0123456789">0123456789</Link>
      </div>

      <div className={styles.address}>
        آدرس : تهران، تقاطع خیابان ولیعصر و طالقانی، مجتمع تجاری نور، طبقه همکف
        سوم تجاری، واحد ۸۰۲۸
      </div>

      <div className={styles.links}>
        {links.map((link) => (
          <Link to={link.href}>{link.title}</Link>
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

      <div className="footer__rights">
        <p>کلیه حقوق این وب‌سایت متعلق به شرکت ... است</p>
      </div>
    </footer>
  );
}

export default Footer;
