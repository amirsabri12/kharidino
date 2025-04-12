import { ReactNode } from "react";

function Footer(): ReactNode {
  return (
     <footer className="bg-white px-6 py-10 text-gray-700 text-center space-y-10 md:text-right md:space-y-8">
      {/* لوگو و پشتیبانی /}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
        <img src="/logo.png" alt="لوگو" className="w-28 mb-4 md:mb-0" />
        <div>
          <p className="font-semibold">تماس با پشتیبانی</p>
          <a href="tel:02191007083" className="text-lg font-bold block mt-1">۰۲۱-۹۱۰۰۷۰۸۳</a>
        </div>
      </div>

      {/ نشانی /}
      <div className="max-w-md mx-auto md:mx-0">
        <h4 className="font-semibold text-lg mb-2">نشانی</h4>
        <p className="text-sm leading-relaxed">
          تهران، تقاطع خیابان ولیعصر و طالقانی، مجتمع تجاری نور، طبقه همکف سوم تجاری، واحد ۸۰۲۸
        </p>
      </div>

      {/ لینک‌های فوتر /}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-medium justify-items-center md:justify-items-start">
        <a href="#">اطلاعات</a>
        <a href="#">امکانات اضافی</a>
        <a href="#">حساب کاربری من</a>
        <a href="#">پرسش‌های متداول</a>
      </div>

      {/ آیکون‌های شبکه اجتماعی /}
      <div>
        <p className="mb-4 font-semibold">با ما در ارتباط باشید:</p>
        <div className="flex justify-center md:justify-start gap-5 flex-wrap">
          <a href="#"><img src="/icons/telegram.svg" alt="تلگرام" className="w-6 grayscale hover:grayscale-0 transition" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="اینستاگرام" className="w-6 grayscale hover:grayscale-0 transition" /></a>
          <a href="#"><img src="/icons/aparat.svg" alt="آپارات" className="w-6 grayscale hover:grayscale-0 transition" /></a>
          <a href="#"><img src="/icons/linkedin.svg" alt="لینکدین" className="w-6 grayscale hover:grayscale-0 transition" /></a>
          <a href="#"><img src="/icons/youtube.svg" alt="یوتیوب" className="w-6 grayscale hover:grayscale-0 transition" /></a>
        </div>
      </div>

      {/ کپی‌رایت */}
      <div className="text-xs text-gray-500 mt-6">
        کلیه حقوق این وبسایت متعلق به شرکت ... است
      </div>
    </footer>
 
        
  )
}
export default Footer;
