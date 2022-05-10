
interface Dashboard {
  name: string;
  email: string;
  imageURL: string;
}

export function Dashboard({ name, email, imageURL }: Dashboard) {

  console.log(imageURL)

  return (
      <div className="flex flex-col items-center gapy-4 px-6">
        <img src={imageURL} className="border-2 border-brand-500 rounded-full w-32"/>
        <h2 className="text-2xl">Bem vindo, <span className="text-brand-300 font-medium text-3xl">{name}</span>!</h2>
        <section className="w-[804px]">
          <table className="table-fixed w-full border-separate border-spacing">
            <thead>
              <tr>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Tipo</th>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Mensagem</th>
                <th className="font-normal text-zinc-500 text-left py-4 px-6">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-zinc-900 rounded-lg">
                <td className="text-zinc-100 py-4 px-6">BUG</td>
                <td className="text-zinc-100 py-4 px-6">Bugou tudo!!!</td>
                <td className="text-zinc-100 py-4 px-6">24/04/2022</td>
              </tr>
              <tr className="bg-zinc-900 rounded-lg">
                <td className="text-zinc-100 py-4 px-6">BUG</td>
                <td className="text-zinc-100 py-4 px-6">Bugou tudo!!!</td>
                <td className="text-zinc-100 py-4 px-6">24/04/2022</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
  )
}