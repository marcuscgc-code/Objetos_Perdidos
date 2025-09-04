import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sistema de Objetos Perdidos</h1>
      <p className="mb-6">
        Bem-vindo ao sistema de Achados e Perdidos do IFMA - Campus Monte Castelo.
      </p>

      <nav className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          Início
        </Link>

        <Link
          href="/usuarios"
          className="text-blue-600 hover:underline"
        >
          Usuários
        </Link>

        <Link
          href="/objetos/novo"
          className="text-blue-600 hover:underline"
        >
          Cadastrar Objeto
        </Link>
      </nav>
    </main>
  );
}
