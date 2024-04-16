import Image from "next/image";
import Link from "next/link";
import FormLogin from "./_components/FormLogin";

export default function Home() {
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
        height={80}
        className='absolute bottom-5 left-10 hidden md:block'
      />
      <div className='container mx-auto flex justify-end mt-20'>
        <div className='flex flex-col p-4 m-10 gap-3'>
          <p>
            Entre com sua conta
            <span className='text-cyan-600'>.</span>
          </p>
          <h1>Login</h1>
          <p>
            Ainda não tem uma conta?{" "}
            <Link href='/register'>Clique para criar uma.</Link>
          </p>
          <FormLogin />
        </div>
      </div>
    </main>
  );
}
