import { ProductType } from "../types/ProductType"
import ProductImage from "./ProductImage"

type ProductProps = {
    product: ProductType
}
export default function Product({product}: ProductProps){
    return(
        <div className=" flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">IMG</div>
            {/* No next.js toda vez que voce usa cria um componente proprio pra Imagem, ele pede pra configurar em "next.config.js" */}
            <ProductImage product={product} fill/>
            <div className="flex flex-row justify-between font-bold my-3">{product.title}</div>
            <button className="rounded-md bg-teal-300 text-orange-400 px-3.5 py-2.5 text-sm text-center"></button>
        </div>
    )
}