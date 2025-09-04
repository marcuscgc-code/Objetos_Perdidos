import Link from "next/link";

const objetos = [
  {
    id: 1,
    nome: "Mochila preta",
    local: "Biblioteca",
    data: "20/08/2025",
  },
  {
    id: 2,
    nome: "Carteira marrom",
    local: "Cantina",
    data: "15/08/2025",
  },
  {
    id: 3,
    nome: "Chave prateada",
    local: "Auditório",
    data: "12/08/2025",
  },
];

export default function ListaObjetos() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Objetos Cadastrados</h1>
      <ul className="space-y-4">
        {objetos.map((obj) => (
          <li key={obj.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{obj.nome}</h2>
            <p className="text-gray-600">Local: {obj.local}</p>
            <p className="text-gray-600">Data: {obj.data}</p>
            <Link
              href={`/objetos/${obj.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
