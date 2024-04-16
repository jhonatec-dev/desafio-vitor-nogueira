import Image from "next/image";
import Link from "next/link";
import FormRegister from "../_components/FormRegister";
import SocialButtons from "../_components/SocialButtons";

export default function Register() {
  return (
    <main>
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
        <div className='flex flex-col p-4 m-10 gap-4 w-full sm:w-96'>
          <Image
            src='/assets/images/logo.png'
            alt='Logo'
            width={200}
            height={150}
            className='mx-auto mb-8 md:absolute md:top-5 md:left-10 sm:translate-x-0'
          />
          <p>
            Crie seu acesso
            <span className='text-cyan-600'>.</span>
          </p>
          <h1>Registrar</h1>
          <p>
            Já tem uma conta? <Link href='/'>Clique para entrar.</Link>
          </p>
          <FormRegister />
          <h6 className="mt-8">Ou registre usando suas redes sociais</h6>
          <SocialButtons />
        </div>
      </div>
    </main>
  );
}
