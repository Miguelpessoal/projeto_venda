import Input from "../Input";
import ProductTypesSelectInput from "../productType/ProductTypesSelectInput";

interface CreateProductFormProps {
  name: string;
  price: number;
  productTypeId: number;
  onChangeNameEvent: any;
  onChangePriceEvent: any;
  onChangeProductTypeEvent: any;
}

export default function CreateProductForm(props: CreateProductFormProps) {
  return (
    <div className="w-full max-w-xs">
      <ProductTypesSelectInput
        defaultValue={props.productTypeId}
        onChangeOptionEvent={props.onChangeProductTypeEvent}
      />
      <Input
        label="Produto"
        defaultValue={props.name}
        type="text"
        disabled={false}
        onChangeEvent={props.onChangeNameEvent}
      />
      <Input
        label="Preço"
        defaultValue={props.price}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangePriceEvent}
      />
    </div>
  );
}
