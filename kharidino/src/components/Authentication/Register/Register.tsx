import { FormEvent, useState } from "react";

import styles from "./Register.module.css";

type FormData = {
  username: string;
  email: string;
  password: string;
};

function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("اطلاعات فرم:", formData);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <h2>فرم ثبت‌نام</h2>

      <label>نام کاربری</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={(e) =>
          setFormData((old) => ({ ...old, username: e.target.value }))
        }
        required
      />

      <label>ایمیل</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((old) => ({ ...old, email: e.target.value }))
        }
        required
      />

      <label>رمز عبور</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) =>
          setFormData((old) => ({ ...old, password: e.target.value }))
        }
        required
      />

      <button type="submit">ارسال</button>
    </form>
  );
}

export default SimpleForm;
