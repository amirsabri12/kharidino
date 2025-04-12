import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="" alt="" />
        <h2>kharidino |خریدی نو</h2>
      </div>

      <div className="footer__contact">
        <p>تماس با پشتیبانی: <a href="tel:021154553">021154553</a></p>
        <p>نشانی: تهران، </p>
      </div>

      <div className="footer__links">
        <a href="#">اطلاعات</a>
        <a href="#">امکانات اضافی</a>
        <a href="#">حساب کاربری من</a>
        <a href="#">پرسش‌های متداول</a>
      </div>

      <div className="footer__social">
        <p>با ما در ارتباط باشید:</p>
        <div className="icons">
          <a href="#"><img src="telegram-icon.png" alt="Telegram" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="aparat-icon.png" alt="Aparat" /></a>
          <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          <a href="#"><img src="youtube-icon.png" alt="YouTube" /></a>
        </div>
      </div>

      <div className="footer__rights">
        <p>کلیه حقوق این وب‌سایت متعلق به شرکت ... است</p>
      </div>
    </footer>
  );
};

export default Footer;