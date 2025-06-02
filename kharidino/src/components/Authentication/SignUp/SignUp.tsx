import { ReactNode } from "react";

import TextInput from "../../Text-input/TextInput.tsx";
import PasswordInput from "../../Password-input/Password-input.tsx";
import Button from "../../Button/Button.tsx";

import styles from "./SignUp.module.css";

function SignupForm(): ReactNode {
  return (
    <form className={styles["form-container"]}>
      <h2> ثبت‌نام</h2>

      <TextInput label={"نام کاربری"} inputType={"text"} />
      <TextInput label={"ایمیل"} inputType={"email"} />
      <PasswordInput label={"رمز عبور"} />
      <Button>ثبت نام</Button>
    </form>
  );
}

export default SignupForm;
