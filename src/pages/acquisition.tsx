import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";

import Layout from "../components/template/Layout";
import CreateAcquisitionForm from "@/components/acquisition/CreateAcquisitionForm";
import { AcquisitionDataTable } from "@/components/acquisition/AcquisitionDataTable";

const Acquisition: NextPage = () => {
  const [productStockId, setProductStockId] = useState("");
  const [typeStockMovementId, setTypeStockMovementId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() =>
    console.log(`
    prodStock ${productStockId},
    typeMov ${typeStockMovementId}
    quantity ${quantity}
  `)
  );

  const handleCreateNewAcquisition = async (event: FormEvent) => {
    event.preventDefault();

    // fetch("http://127.0.0.1:8000/api/stock-movements", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     product_stock_id: productStockId,
    //     type_stock_movement_id: typeStockMovementId,
    //     quantity: quantity,
    //   }),
    //   headers: { "Content-type": "application/json; charset=UTF-8" },
    // }).then((response) => response.json());

    window.location.reload();
  };

  const createAcquisitionForm = () => (
    <CreateAcquisitionForm
      productStockId={productStockId}
      typeStockMovementId={typeStockMovementId}
      quantity={quantity}
      onChangeProductStockIdEvent={setProductStockId}
      onChangeTypeStockMovementIdEvent={setTypeStockMovementId}
      onChangeQuantityEvent={setQuantity}
    />
  );

  const modalExtraButton = () => (
    <button
      className="rounded px-4 py-2 ml-4 text-white bg-green-500 "
      type="submit"
    >
      Criar
    </button>
  );

  return (
    <Layout
      title="Vendas"
      subtitle="Gerenciamento das Vendas dos Produtos"
    >
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          form={createAcquisitionForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewAcquisition}
        >
          Cadastrar uma Venda
        </ButtonModalToggle>
      </div>
      <AcquisitionDataTable />
    </Layout>
  );
};

export default Acquisition;
