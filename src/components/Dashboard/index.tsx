import { useEffect, useState } from "react";
import { User } from "../../contexts/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../lib/api";

type History = {
  comment: string;
  type: string;
  screenshot?: string | null;
  created_at: string;
}

export function Dashboard() {
  const [history, setHistory] = useState<History[]>([]);

  const { user }  = useAuth() as {user: User};
  
  console.log(user);

  const { name, email, imageURL, uid } = user;

  useEffect(() => {
    api.get(`/feedbacks/${uid}`).then(response => setHistory(response.data));
  }, [])

  return (
      <div className="flex flex-col items-center px-6">
        <img src={imageURL} className="border-2 border-brand-500 rounded-full w-52"/>
        <h2 className="text-2xl pt-4 pb-8">Bem vindo, <span className="text-brand-300 font-medium text-3xl">{name}</span>!</h2>
        <section className="w-[1000px]">
          <table className="table-fixed w-full border-separate border-spacing">
            <thead>
              <tr>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Tipo</th>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Mensagem</th>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Data</th>
              </tr>
            </thead>
            <tbody>
              {history.map(item => (
                <tr key={item.created_at} className="bg-zinc-900 rounded-lg">
                  <td className="text-zinc-100 py-4 px-6">{item.type}</td>
                  <td className="text-zinc-100 py-4 px-6">{item.comment}</td>
                  <td className="text-zinc-100 py-4 px-6">{item.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
  )
}