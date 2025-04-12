import React from "react";
import styles from "./Footer.module.scss";
import { FaTelegramPlane, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="kharidino" />
      </div>

      <div className={styles.contact}>
        تماس با پشتیبانی: <a href="tel:0123456789">0123456789</a>
      </div>

      <div className={styles.address}>
      آدرس
      </div>

      <div className={styles.links}>
        <a href="#">اطلاعات</a>
        <a href="#">امکانات اضافی</a>
        <a href="#">حساب کاربری من</a>
        <a href="#">پرسش‌های متداول</a>
      </div>

      <div className={styles.socials}>
        <a href="#"><FaTelegramPlane /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <div className={styles.copyright}>
        کلیه حقوق این وبسایت متعلق به شرکت .... می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;