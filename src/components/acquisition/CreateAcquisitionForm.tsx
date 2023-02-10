import Input from "../Input";
import ProductSelectInput from "../product/ProductSelectInput";

interface CreateAcquisitionFormProps {
  productId: number | string;
  quantity: number | string;
  onChangeProductIdEvent: any;
  onChangeQuantityEvent: any;
}

export default function CreateAcquisitionForm(
  props: CreateAcquisitionFormProps
) {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-2">
        <ProductSelectInput
          defaultValue={props.productId}
          onChangeOptionEvent={props.onChangeProductIdEvent}
        />
      </div>
      <Input
        label="Quantidade"
        defaultValue={props.quantity}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangeQuantityEvent}
      />
    </div>
  );
}
