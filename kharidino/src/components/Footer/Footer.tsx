import React from "react";
import styles from "./Footer.module.scss";
import { FaTelegramPlane, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Exo Game Logo" />
      </div>

      <div className={styles.contact}>
        تماس با پشتیبانی: <a href="tel:02191007083">021-91007083</a>
      </div>

      <div className={styles.address}>
        تهران، تقاطع خیابان ولیعصر و طالقانی، مجتمع تجاری نور، طبقه همکف سوم تجاری، واحد ۸۰۲۸
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
        کلیه حقوق این وبسایت متعلق به شرکت آینده گستر‌ان زرین وانیا می‌باشد.
      </div>
    </footer>
  );
};

export default Footer;