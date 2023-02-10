import { ProductInterface } from "../../Interfaces/ProductInterface";
import Input from "../Input";

interface SeeProductProps{
    product: ProductInterface
}

export default function SeeProduct(props: SeeProductProps){
    return (
        <>
            <div className="w-full max-w-xs">
                <form className="shadow-md rounded">
                    <Input label="Produto" value={props.product?.name} type="text" disabled={true}/>
                    <Input label="Preço" value={props.product?.price} type="text" disabled={true}/>
                    <Input label="Tipo de Produto" value={props.product?.product_type} type="text" disabled={true}/>
                </form>
                
            </div>
        </>
    )
}