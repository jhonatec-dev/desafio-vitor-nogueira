"use client";
interface LoginFiels {
  email: string;
  password: string;
}

import { useForm } from "react-hook-form";
import BaseButton from "../Buttons/Base";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFiels>();

  function handleLogin(data: LoginFiels) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className='flex flex-col gap-2'
    >
      <BaseButton type='submit'>Entrar</BaseButton>
    </form>
  );
}
