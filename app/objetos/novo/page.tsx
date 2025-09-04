"use client";
import { useState } from "react";
export default function NovoObjetoPage() {
 

 
  //recomendados
// const [valor, funcao] = useState(valorInicial); 
// o valor é o estado inicial e a funcao é a funcao que atualiza o estado
// o valorInicial pode ser um valor, uma funcao ou um objeto e a funcao é a funcao que atualiza o estado
  const [categoria, setCategoria] = useState("");
  // <string[]> é uma array de strings definido com <> e ([]) é os elementos da array, que no caso é strinng e vazio
  const [perguntas, setPerguntas] = useState<string[]>([]);
  const sugestoes: Record<string, string[]> = {
    mochila: ["O que tinha dentro da mochila?", "Qual a cor principal?"],
    carteira: ["Qual documento estava dentro?", "Qual a cor da carteira?"],
    chave: ["Quantas chaves havia no chaveiro?", "Havia chave de carro?"],
    celular: ["Qual a marca/modelo do celular?", "Qual a cor da capa?"],
  };

 const handleCategoriaChange = (value: string) => {
    setCategoria(value);
    setPerguntas(sugestoes[value] || []);
  };
// Toda pagina client é um componente react, ele retorna um JSX que é um HTML em JS e é renderizado no navegador e é o que o usuario vai ver e quando o usuario interage com o site, o componente react é atualizado e o JSX é renderizado novamente
  return(
  <main className="p-6 max-w-2xl mx-auto">

    <h1 className="text-2xl font-bold mb-6">Cadastrar Objeto Encontrado</h1>
    <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="font-medium">Título</span>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Ex.: Mochila preta na biblioteca"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Categoria</span>
          <select
            className="border rounded p-2"
            value={categoria}
            onChange={(e) => handleCategoriaChange(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="mochila">Mochila</option>
            <option value="carteira">Carteira</option>
            <option value="chave">Chave</option>
            <option value="celular">Celular</option>
            <option value="outros">Outros</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Descrição</span>
          <textarea
            className="border rounded p-2"
            placeholder="Descreva onde encontrou, cor, detalhes relevantes..."
          />
        </label>

        <label className="flex flex-col">
          <span className="font-medium">Data do Achado</span>
          <input type="date" className="border rounded p-2" />
        </label>

        {categoria && (
          <div className="mt-4">
            <h2 className="font-semibold">Perguntas sugeridas:</h2>
            <ul className="list-disc pl-6 mt-2">
              {perguntas.map((p, i) => (
                <li key={i} className="text-sm">
                  {p}
                </li>
              ))}
            </ul>

            <label className="flex flex-col mt-2">
              <span className="font-medium">Pergunta personalizada</span>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Adicione sua própria pergunta"
              />
            </label>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 mt-4"
        >
          Cadastrar Objeto
        </button>
      </form>
    </main>
  )
  
  


}