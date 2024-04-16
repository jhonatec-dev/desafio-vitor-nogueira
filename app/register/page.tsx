import Link from "next/link";
import FormRegister from "../_components/FormRegister";

export default function Register() {
  return (
    <main>
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
