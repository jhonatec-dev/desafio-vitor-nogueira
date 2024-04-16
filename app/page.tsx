import Link from "next/link";
import FormLogin from "./_components/FormLogin";

export default function Home() {
  return (
    <main className='bg-stone-800 w-full h-svh text-white flex flex-col items-end justify-center'>
      <div className='flex flex-col p-4 m-10 gap-2'>
        <p>
          Entre com sua conta para acessar os novos recursos
          <span className='text-cyan-600'>.</span>
        </p>
        <h1>Login</h1>
        <p>
          Ainda não tem uma conta?{" "}
          <Link href='/register˝'>Clique para criar uma.</Link>
        </p>
        <FormLogin />
      </div>
    </main>
  );
}
