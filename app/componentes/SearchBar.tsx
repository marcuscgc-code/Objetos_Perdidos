"use client";

import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"achados" | "perdidos" | "todos">("todos");

  return (
    <div className="w-full px-4 pt-4 bg-white shadow-green-300 rounded-md">
      {/* Barra de pesquisa */}
      <div className="flex items-center gap-2 border rounded-full px-3 py-2 bg-[#F7F7F8]">
        <FaSearch className="text-[#009688]" />
        <input
          type="text"
          placeholder="Pesquisar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-gray-600 bg-transparent pl-3 placeholder-gray-400"
        />
        <FaFilter className="text-gray-500 cursor-pointer" />
      </div>

      {/* Tabs (Achados, Perdidos, Todos) */}
      <Tabs active={active} setActive={setActive} />
    </div>
  );
}

// Componente Tabs
function Tabs({
  active,
  setActive,
}: {
  active: "achados" | "perdidos" | "todos";
  setActive: (val: "achados" | "perdidos" | "todos") => void;
}) {
  return (
    <div className="flex w-full justify-around mt-3 border-b">
      <button
        className={`pb-2 font-medium ${
          active === "achados"
            ? "text-[#009688] border-b-2 border-[#009688]"
            : "text-gray-500"
        }`}
        onClick={() => setActive("achados")}
      >
        Achados
      </button>
      <button
        className={`pb-2 font-medium ${
          active === "perdidos"
            ? "text-[#EF5350] border-b-2 border-[#EF5350]"
            : "text-gray-500"
        }`}
        onClick={() => setActive("perdidos")}
      >
        Perdidos
      </button>
      <button
        className={`pb-2 font-medium ${
          active === "todos"
            ? "text-black border-b-2 border-black"
            : "text-gray-500"
        }`}
        onClick={() => setActive("todos")}
      >
        Todos
      </button>
    </div>
  );
}
