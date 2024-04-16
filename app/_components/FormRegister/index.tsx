"use client";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "@/app/_utils/localStorage";
import Mail from "@mui/icons-material/Mail";
import Person from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import validator from "validator";
import BaseButton from "../Buttons/Base";
import Input from "../Inputs/Input";
import ErrorLabel from "../Texts/ErrorLabel";

interface RegisterFiels {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export default function FormRegister() {
  const methods = useForm<RegisterFiels>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [showPassword, setShowPassword] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function handleLogin(data: RegisterFiels) {
    console.log(data);
    const users = getFromLocalStorage("users") || [];
    if (users.find((user: any) => user.email === data.email)) {
      setError("E-mail já cadastrado");
      return;
    }

    users.push(data);
    saveToLocalStorage("users", users);
    setRegistered(true);
  }

  if (error) {
    return (
      <div className='flex flex-col gap-2'>
        <p>{error}</p>
        <BaseButton onClick={() => setError(null)}>Tentar novamente</BaseButton>
      </div>
    );
  }

  if (registered)
    return (
      <div className='flex flex-col gap-2 justify-center'>
        <Image 
          src='/assets/icons/confirmed.svg'
          alt='Usuário cadastrado com sucesso'
          width={150}
          height={150}
          className='mx-auto mix-blend-screen'
        />
        <p>Usuário cadastrado com sucesso!</p>
        <BaseButton onClick={() => setRegistered(false)}>
          Cadastrar outro
        </BaseButton>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-2 w-full'>
      <FormProvider {...methods}>
        <Input
          label='Nome'
          registerAs='name'
          autoComplete='name'
          registerOptions={{
            required: { value: true, message: "Campo obrigatório" },
          }}
          endAdornment={<Person />}
        />
        {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
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
          autoComplete='new-password'
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
        <Input
          label='Confirme a senha'
          type={showPassword ? "text" : "password"}
          registerAs='confirmPassword'
          autoComplete='new-password'
          registerOptions={{
            required: { value: true, message: "Campo obrigatório" },
            validate: (value) => {
              if (value !== methods.getValues("password")) {
                return "As senhas não coincidem";
              }
            },
          }}
          endAdornment={
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          }
        />
        {errors.confirmPassword && (
          <ErrorLabel>{errors.confirmPassword?.message}</ErrorLabel>
        )}

        <div className='flex justify-end items-center'>
          <BaseButton type='submit'>Criar conta</BaseButton>
        </div>
      </FormProvider>
    </form>
  );
}
