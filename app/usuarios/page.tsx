interface UsuarioProps{
  params: Promise<{usuarios:string}>
}






// Esse objeto será interface "UsuarioProps"
const usuarios = async({params}: UsuarioProps) =>{
  const{usuarios} = await params;
  return(
    <div>
      <h1>usuarios</h1>
      <h3>Bem vindo amigos da manha de sabado
      </h3>
    </div>
  );

};

export default usuarios;