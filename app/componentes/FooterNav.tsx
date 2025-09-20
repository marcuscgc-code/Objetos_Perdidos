"use client";
import { FaHome, FaPlusCircle, FaBell, FaSearch, FaFilter } from "react-icons/fa";
import Link from "next/link";

export default function FooterNav() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-3 px-2 md:px-4">
      <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
        <FaHome size={22} />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/objetos/novo" className="flex flex-col items-center text-green-600">
        <FaPlusCircle size={32} />
        <span className="text-xs">Adicionar</span>
      </Link>
      <Link href="/notificacoes" className="flex flex-col items-center text-gray-600 hover:text-blue-600 relative">
        <FaBell size={22} />
        <span className="text-xs">Notificações</span>
        <span className="absolute top-0 right-3 bg-red-500 text-white text-[10px] px-1 rounded-full">
          3
        </span>
      </Link>
    </footer>
  );
}