import { ProductTypeInterface } from "@/Interfaces/ProductTypeInterface";
import { useEffect, useState } from "react";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeProductType from "./SeeProductType";

export function ProductTypesDataTable() {
  const [productTypes, setProductType] = useState<ProductTypeInterface[]>([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/product-types")
  //     .then((response) => response.json())
  //     .then((data) => setProductType(data));
  // }, []);

  useEffect(() =>setProductType([
      {
        id: 1,
        name: "Tipo 1",
        tax_value: 10,
      },
      {
        id: 2,
        name: "Tipo 2",
        tax_value: 20,
      }
    ]), []);

  const seeProductType = (productType: ProductTypeInterface) => (
    <SeeProductType productType={productType} />
  );

  return (
    <div
      className={`${
        productTypes.length > 3 && "overflow-y-scroll h-96"
      } relative shadow-md sm:rounded-lg`}
    >
      <table className="w-full text-sm text-left  overflow-scroll text-gray-50 ">
        {/* space between tr */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50" >
          <tr className="">
            <th scope="col" className="py-3 px-20">
              ID
            </th>
            <th scope="col" className="py-3 px-16">
              Tipo de Produto
            </th>
            <th scope="col" className="py-3 px-16">
              Valor do Imposto
            </th>
            <th scope="col" className="py-3 px-16">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {productTypes.map((productType) => (
            <tr
              key={productType.id}
              className="bg-white border-b hover:bg-gray-50 font-medium text-gray-500 whitespace-nowrap text-center"
            >
              <th
                scope="row"
                className="py-4 px-4 "
              >
                <td className="py-4 px-16">{productType.id}</td>
              </th>
              <th>
                <td className="py-4 px-20">{productType.name}</td>
              </th>
              <th>
                <td className="py-4 px-24">{productType.tax_value}</td>
              </th>
              <th className="py-4 px-8">
                <td>
                  <ButtonModalToggle form={seeProductType(productType)}>
                    Ver
                  </ButtonModalToggle>
                </td>
                <td>
                  <DeleteButton
                    url={`http://127.0.0.1:8000/api/product-types/${productType.id}`}
                  >
                    Deletar
                  </DeleteButton>
                </td>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
