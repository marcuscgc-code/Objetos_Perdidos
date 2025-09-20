interface Props {
  nome: string;
  descricao: string;
  tags: string[];
  status: 'achado' | 'perdido';
  data: string;
  imagem?: string;
}
const cores = { 
  achado: "#009688", 
  perdido: "#EF5350" 
};

export default function ObjetoCard({ nome, descricao, tags, status, data, imagem }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-3 mb-3 flex flex-col sm:flex-row gap-2 items-start">
      <img
        src={imagem || "/globe.svg"}
        className="w-14 h-14 object-cover rounded sm:w-16 sm:h-16"
        alt={nome}
      />
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-1">{nome}</h3>
        <p className="text-xs text-gray-700 mb-1 line-clamp-2">{descricao}</p>
        <div className="flex flex-wrap gap-1 mb-1">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 text-[11px] rounded bg-gray-100 text-gray-700 border border-gray-200">
              {tag}
            </span>
          ))}
        </div>
        <span className="px-2 py-0.5 text-[11px] rounded" style={{backgroundColor: cores[status], color: "#fff"}}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <span className="ml-2 self-start px-2 py-0.5 text-[11px] font-medium rounded" style={{backgroundColor: cores[status], color: "#fff"}}>
        {data}
      </span>
    </div>
  );
}