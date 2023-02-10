import { AcquisitionInterface } from "@/Interfaces/AcquisitionInterface";
import { useEffect, useState } from "react";
import Input from "../Input";

interface SeeAcquisitionProps {
  acquisition: AcquisitionInterface
}

export default function SeeAcquisition(props: SeeAcquisitionProps) {
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="shadow-md rounded">
          <Input
            label="Produto"
            value={props.acquisition?.product.name}
            type="text"
            disabled={true}
          />
          <Input
            label="Total de Produtos"
            value={props.acquisition?.products_total_value}
            type="text"
            disabled={true}
          />
          <Input
            label="Valor Total De Impostos"
            value={props.acquisition?.tax_total_value}
            type="text"
            disabled={true}
          />
          <Input
            label="Valor Total da Venda"
            value={props.acquisition?.acquisition_total_value}
            type="text"
            disabled={true}
          />
        </form>
      </div>
    </>
  );
}
