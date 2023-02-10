import { ProductTypeInterface } from "@/Interfaces/ProductTypeInterface";
import Input from "../Input";

interface SeeProductTypeProps {
  productType: ProductTypeInterface;
}

export default function SeeProductType(props: SeeProductTypeProps) {
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded">
          <Input
            label="Tipo de Produto"
            value={props.productType?.name}
            type="text"
            disabled={true}
          />
          <Input
            label="Valor do Imposto"
            value={props.productType?.tax_value}
            type="text"
            disabled={true}
          />
        </form>
      </div>
    </>
  );
}
