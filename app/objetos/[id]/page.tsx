import Link from "next/link";

interface ObjetoPageProps {
  params: { id: string };
}

export default function ObjetoPage({ params }: ObjetoPageProps) {
  const { id } = params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Objeto</h1>
      <p>ID do objeto: {id}</p>

      <nav className="mt-6 flex flex-col gap-3">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          Voltar para Home
          
        </Link>

        <Link
          href="/usuarios"
          className="text-blue-600 hover:underline"
        >
          Ver Usuários
        </Link>
      </nav>
    </main>
  );
}
