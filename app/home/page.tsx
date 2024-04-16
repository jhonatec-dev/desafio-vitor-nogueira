import Image from "next/image";
import Link from "next/link";
import BaseButton from "../_components/Buttons/Base";

export default function Home() {
  return (
    <main>
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
        <div className='flex flex-col p-4 m-10 gap-3'>
          <h1>Bem-vindo!</h1>
          <Image
            src='/assets/icons/welcome.svg'
            alt='Bem-vindo'
            width={300}
            height={300}
          />
          <Link href='/'>
            <BaseButton className='w-full mt-4'>Sair</BaseButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
