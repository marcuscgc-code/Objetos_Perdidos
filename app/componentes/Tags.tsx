"use client";

const tags = ["mochila", "azul", "chave", "caderno"];

export default function Tags() {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs rounded-full border border-gray-300 bg-gray-100 text-gray-700 sm:text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}