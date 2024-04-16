import Link from "next/link";
import FormLogin from "./_components/FormLogin";

export default function Home() {
  return (
    <main>
      <div className='flex sm:container sm:justify-end sm:mx-auto'>
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
