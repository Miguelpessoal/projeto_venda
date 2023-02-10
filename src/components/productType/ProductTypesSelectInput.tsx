import { ProductTypeInterface } from "@/Interfaces/ProductTypeInterface";
import { useEffect, useState } from "react";

interface ProductTypeSelectInputProps {
  defaultValue: any;
  onChangeOptionEvent: any;
}

export default function ProductTypesSelectInput(
  props: ProductTypeSelectInputProps
) {
  const [productTypes, setProductTypes] = useState<ProductTypeInterface[]>(
    []
  );

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/product-Types")
  //     .then((response) => response.json())
  //     .then((data) => setProductTypes(data));
  // }, []);

  return (
    <>
      <label className="block text-gray-700  font-bold mb-2 w-full text-start">
        Selecione um Tipo de Produto
      </label>
      <select
        className={`
          bg-gray-50 border border-gray-300 text-gray-900
           text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          block w-full p-2.5
          `}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChangeOptionEvent(e.target.value)}
        required
      >
        <option selected>Selecione um Tipo</option>
        {productTypes.map((productType) => (
          <option value={productType.id}>{productType.name}</option>
        ))}
      </select>
    </>
  );
}
