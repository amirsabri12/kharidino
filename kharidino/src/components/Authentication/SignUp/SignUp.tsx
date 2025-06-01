import { FormEvent, ReactNode, useState } from "react";

import TextInput from "../../Text-input/TextInput.tsx";
import PasswordInput from "../../Password-input/Password-input.tsx";

import styles from "./SignUp.module.css";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignupForm(): ReactNode {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("اطلاعات فرم:", formData);
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <h2> ثبت‌نام</h2>

      <label>نام کاربری</label>
      <TextInput
          inputType={"text"}
        name="username"
        value={formData.username}
        onChange={(e) =>
          setFormData((old) => ({ ...old, username: e.target.value }))
        }
        required
      />

      <label>ایمیل</label>
      <TextInput
        inputType={"email"}
        name="email"
        value={formData.email}
        onChange={(e) =>
          setFormData((old) => ({ ...old, email: e.target.value }))
        }
        required
      />

      <label>رمز عبور</label>
      <PasswordInput
        name="password"
        value={formData.password}
        onChange={(e) =>
          setFormData((old) => ({ ...old, password: e.target.value }))
        }
        required
      />
      <label>تایید رمز عبور</label>
      <PasswordInput
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData((old) => ({ ...old, confirmPassword: e.target.value }))
        }
        required
      />
      <button type="submit">ارسال</button>
    </form>
  );
}

export default SignupForm;
