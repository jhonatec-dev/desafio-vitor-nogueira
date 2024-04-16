import Image from "next/image";
import Link from "next/link";
import BaseButton from "./_components/Buttons/Base";

export default function NotFound() {
  return (
    <main>
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
        <div className='flex flex-col p-4 m-10 gap-3 justify-center items-center'>
          <Image 
            src='/assets/icons/404.svg'
            alt='Página não encontrada'
            width={300}
            height={300}
          />
          <h1>404</h1>
          <p>Página não encontrada.</p>
          <Link href='/' className="w-full">
            <BaseButton className="w-full mt-4">Voltar</BaseButton>
          </Link>
        </div>
      </div>
    </main>
  );
}