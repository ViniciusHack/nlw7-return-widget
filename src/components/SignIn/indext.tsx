import { GoogleLogo } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const { signIn } = useAuth();
  
  return (
    <section className="my-0 mx-auto w-max max-w-4xl">
        <button onClick={signIn} className="p-4 flex items-center gap-4 rounded-xl font-medium bg-brand-500 text-lg text-white hover:bg-brand-300">
          <GoogleLogo size={32} weight="bold"/>
          Autenticação com o Google
        </button>
    </section>
  )
}