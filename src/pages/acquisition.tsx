import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";

import Layout from "../components/template/Layout";
import CreateAcquisitionForm from "@/components/acquisition/CreateAcquisitionForm";
import { AcquisitionDataTable } from "@/components/acquisition/AcquisitionDataTable";

const Acquisition: NextPage = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCreateNewAcquisition = async (event: FormEvent) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/acquisitions", {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        quantity: quantity,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  const createAcquisitionForm = () => (
    <CreateAcquisitionForm
      productId={productId}
      quantity={quantity}
      onChangeProductIdEvent={setProductId}
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
