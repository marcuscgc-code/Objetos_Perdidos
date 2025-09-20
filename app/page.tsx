import { ProductType } from "./types/ProductType";
import Product from "./componentes/Product";
async function getProducts() {
  //endpoint
  const res = await fetch('https://fakestoreapi.com/products')
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
//async serve pra endpoint (APP ROUTER) buscar dados diretamente dos compontentes reacts
// temos que definir na aplicação async await pra utilizar a promise. Quaando usamos um fetching retorna uma promise , usa async pra usar await
export default async function Home(){
  const products = await getProducts();
  //Todas as paginas com default, são paginas que vão rodar ao lado do servidor
  //Quando o usuario fizer uma requisição de uma página, será executado no lado do servidor e entregar tudo pronto --- otimizar aplicação e SEO

  return(
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
      {products.map((product: ProductType)=>(
        <Product key={product.id} product={product}></Product>

      ))
    }

      </div>
      <h1>Achare</h1>
    </div>
  );
}