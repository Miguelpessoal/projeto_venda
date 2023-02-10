import Input from "../Input";

interface CreateProductTypeFormProps {
  name: string;
  tax_value: number;
  onChangeNameEvent: any;
  onChangeTaxValueEvent: any;
}

export default function CreateProductTypeForm(
  props: CreateProductTypeFormProps
) {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-2">
        <Input
          label="Tipo de Produto"
          defaultValue={props.name}
          type="text"
          disabled={false}
          onChangeEvent={props.onChangeNameEvent}
        />
      </div>
      <Input
        label="Valor do Imposto"
        defaultValue={props.tax_value}
        type="number"
        disabled={false}
        onChangeEvent={props.onChangeTaxValueEvent}
      />
    </div>
  );
}
