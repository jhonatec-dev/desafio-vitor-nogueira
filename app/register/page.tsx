import Image from "next/image";
import Link from "next/link";
import FormRegister from "../_components/FormRegister";

export default function Register() {
  return (
    <main>
      <Image
        src='/assets/images/logo.png'
        alt='Logo'
        width={200}
        height={150}
        className='absolute top-5 left-1/3 md:left-10 sm:translate-x-0'
      />
      <Image
        src='/assets/images/code.png'
        alt='Logo'
        width={100}
        height={100}
        className='absolute bottom-5 left-10 hidden md:block'
      />
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
        <div className='flex flex-col p-4 m-10 gap-3 w-full sm:w-96'>
          <p>
            Crie seu acesso
            <span className='text-cyan-600'>.</span>
          </p>
          <h1>Registrar</h1>
          <p>
            Já tem uma conta? <Link href='/'>Clique para entrar.</Link>
          </p>
          <FormRegister />
        </div>
      </div>
    </main>
  );
}
