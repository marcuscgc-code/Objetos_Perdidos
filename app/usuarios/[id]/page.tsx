interface PageProps {
  params: {
    id: string;
  };
}

const PaginaNumero = async ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <h1>Usuário com ID: {id}</h1>
      <h2>gay</h2>
    </div>
  );
  <h3>gay</h3>
};

export default PaginaNumero;
