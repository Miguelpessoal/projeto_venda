import { useEffect, useState } from "react";
import { ProductInterface } from "../../Interfaces/ProductInterface";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeProduct from "./SeeProduct";

export function ProductsDataTable() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => setProducts([
    {
      id: 1,
      name: "Produto 1",
      product_type: "Tipo 1",
      price: 10
    },
    {
      id: 2,
      name: "Produto 2",
      product_type: "Tipo 2",
      price: 20
    },
  ]), [])
        
  const seeProduct = (product: ProductInterface) => <SeeProduct product={product} />;

  return (
    <div
      className={`${
        products.length > 3 && "overflow-y-scroll h-96"
      } relative shadow-md sm:rounded-lg`}
    >
      <table className="w-full text-sm text-left overflow-scroll text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-11">
              ID
            </th>
            <th scope="col" className="py-3 px-12">
              Nome do Produto
            </th>
            <th scope="col" className="py-3 px-12">
              Tipo do Produto
            </th>
            <th scope="col" className="py-3 px-12">
              Preço
            </th>
            <th scope="col" className="py-3 px-8">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b hover:bg-gray-50 font-normal text-gray-500"
            >
              <th
                scope="row"
                className="py-4 px-6 "
              >
                <td className="py-4 px-6">{product.id}</td>
              </th>
              <th>
                <td className="py-4 px-16">{product.name}</td>
              </th>
              <th>
                <td className="py-4 px-16">{product.product_type}</td>
              </th>
              <th>
                <td className="py-4 px-12">{`R$ ${product.price}`}</td>
              </th>
              <th className="py-4 px-4">
                <td>
                  <ButtonModalToggle
                    form={seeProduct(product)}
                  >
                    Ver
                  </ButtonModalToggle>
                </td>
                <td>
                  <DeleteButton
                    url={`http://127.0.0.1:8000/api/products/${product.id}`}
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
