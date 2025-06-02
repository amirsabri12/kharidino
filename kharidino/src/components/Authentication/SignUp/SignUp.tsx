import { FormEvent, ReactNode } from "react";

import { SignupDto } from "../../../dto/signup.dto.ts";

import { useMutation } from "@tanstack/react-query";
import fetchSignUpApi from "../../../api/fetch-signup.ts";

import TextInput from "../../Text-input/TextInput.tsx";
import PasswordInput from "../../Password-input/Password-input.tsx";
import Button from "../../Button/Button.tsx";

import styles from "./SignUp.module.css";

function SignupForm(): ReactNode {
  const mutation = useMutation({
    mutationFn: fetchSignUpApi,
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const dto: SignupDto = {
      name: formdata.get("name" as string) as string,
      email: formdata.get("email") as string,
      password: formdata.get("password") as string,
    };

    mutation.mutate(dto, {
      onSuccess: (result) => {
        console.log(result);
      },
    });
  };

  return (
    <form className={styles["form-container"]} onSubmit={formSubmitHandler}>
      <h2> ثبت‌نام</h2>

      <TextInput label={"نام کاربری "} inputType={"text"} name={"name"} />
      <TextInput label={"ایمیل"} inputType={"email"} name={"email"} />
      <PasswordInput label={"رمز عبور"} name={"password"} />
      <Button>ثبت نام</Button>
    </form>
  );
}

export default SignupForm;
