import Image from "next/image";
import Link from "next/link";
import FormLogin from "./_components/FormLogin";

export default function Home() {
  return (
    <main>
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
        <div className='flex flex-col p-4 m-10 gap-3'>
          <Image
            src='/assets/images/logo.png'
            alt='Logo'
            width={200}
            height={150}
            className='mx-auto mb-8 md:absolute md:top-5 md:left-10 sm:translate-x-0'
          />
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
          <h6 className="mt-8">Ou entre usando suas redes sociais</h6>
          {/* <SocialButtons /> */}
        </div>
      </div>
    </main>
  );
}
