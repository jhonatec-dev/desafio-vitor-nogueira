"use client";
import { getFromLocalStorage } from "@/app/_utils/localStorage";
import Mail from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import validator from "validator";
import BaseButton from "../Buttons/Base";
import Input from "../Inputs/Input";
import ErrorLabel from "../Texts/ErrorLabel";

interface LoginFiels {
  email: string;
  password: string;
}

export default function FormLogin() {
  const methods = useForm<LoginFiels>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  function handleLogin(data: LoginFiels) {
    console.log(data);
    const users = getFromLocalStorage("users") || [];
    const user = users.find((user: any) => user.email === data.email);
    if (!user || user.password !== data.password) {
      setErrorMessage("E-mail ou senha inválidos");
      return;
    }
    router.push("/home");
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-2'>
      <FormProvider {...methods}>
        <Input
          label='E-mail'
          registerAs='email'
          autoComplete='email'
          registerOptions={{
            required: { value: true, message: "Campo obrigatório" },
            validate: (value) => {
              if (!validator.isEmail(value)) {
                return "E-mail inválido";
              }
            },
          }}
          endAdornment={<Mail />}
        />
        {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
        <Input
          label='Senha'
          type={showPassword ? "text" : "password"}
          registerAs='password'
          autoComplete='current-password'
          registerOptions={{
            required: { value: true, message: "Campo obrigatório" },
            minLength: {
              value: 6,
              message: "A senha deve ter no mínimo 6 caracteres",
            },
          }}
          endAdornment={
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          }
        />
        {errors.password && <ErrorLabel>{errors.password?.message}</ErrorLabel>}
        {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        <div className='flex justify-between items-center'>
          <Link href={"/forgot-password"}>Esqueci minha senha</Link>
          <BaseButton className='w-1/3'>Entrar</BaseButton>
        </div>
      </FormProvider>
    </form>
  );
}
