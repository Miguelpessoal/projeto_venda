import { AcquisitionInterface } from "@/Interfaces/AcquisitionInterface";
import { useEffect, useState } from "react";
import ButtonModalToggle from "../ButtonModalToggle";
import DeleteButton from "../DeleteButton";
import SeeStockMovement from "./SeeAcquisition";

export function AcquisitionDataTable() {
  const [acquisition, setAcquisition] = useState<AcquisitionInterface[]>([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/acquisitions")
  //     .then((response) => response.json())
  //     .then((data) => setAcquisition(data));
  // }, []);

  useEffect(
    () =>
      setAcquisition([
        {
          id: 1,
          product: {
            id: 1,
            name: "Produto 1",
            price: 10.0,
            product_type: "tipo 1",
          },
          products_total_value: 10.0,
          tax_total_value: 10.0,
          acquisition_total_value: 10.0,
        },
      ]),
    []
  );

  const seeAcquisition = (acquisition: AcquisitionInterface) => (
    <SeeStockMovement acquisition={acquisition} />
  );

  return (
    <div
      className={`${
        acquisition.length > 3 && "overflow-y-scroll h-96"
      }  relative shadow-md sm:rounded-lg`}
    >
      <table className="w-full text-sm text-left overflow-scroll text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-11">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Nome do Produto
            </th>
            <th scope="col" className="py-3 px-6">
              Total de Produtos
            </th>
            <th scope="col" className="py-3 px-6">
              Valor Total de Impostos
            </th>
            <th scope="col" className="py-3 px-6">
              Valor Total da Venda
            </th>
            <th scope="col" className="py-3 px-16">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>
          {acquisition.map((acquisition) => (
            <tr
              key={acquisition.id}
              className="bg-white border-b hover:bg-gray-50 font-medium text-gray-500 whitespace-nowrap"
            >
              <th
                scope="row"
                className="py-4 px-6 "
              >
                <td className="py-4 px-6">{acquisition.id}</td>
              </th>
              <th>
                <td className="py-4 px-9">{acquisition.product.name}</td>
              </th>
              <th>
                <td className="py-4 px-16">{acquisition.products_total_value}</td>
              </th>
              <th>
                <td className="py-4 px-20">{acquisition.tax_total_value}</td>
              </th>
              <th>
                <td className="py-4 px-20">
                  {acquisition.acquisition_total_value}
                </td>
              </th>
              <th className="py-4 px-8 text-right">
                <td >
                  <ButtonModalToggle form={seeAcquisition(acquisition)}>
                    Ver
                  </ButtonModalToggle>
                </td>
                <td>
                  <DeleteButton
                    url={`http://127.0.0.1:8000/api/acquisitions/${acquisition.id}`}
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
