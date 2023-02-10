import CreateProductTypeForm from "@/components/productType/CreateProductTypeForm";
import { ProductTypesDataTable } from "@/components/productType/ProductTypesDataTable";
import { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import ButtonModalToggle from "../components/ButtonModalToggle";
import Layout from "../components/template/Layout";

const ProductTypes: NextPage = () => {
  const [name, setName] = useState('');
  const [taxValue, setTaxValue] = useState(0);

  const handleCreateNewProductStock = async (event: FormEvent) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/product-types", {
      method: "POST",
      body: JSON.stringify({ name: name, tax_value: taxValue }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => response.json());

    window.location.reload();
  };

  const createProductTypeForm = () => (
    <CreateProductTypeForm
      name={name}
      tax_value={taxValue}
      onChangeNameEvent={setName}
      onChangeTaxValueEvent={setTaxValue}
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
      title="Tipos De Produtos"
      subtitle="Gerenciamento de Tipos de Produtos"
    >
      <div className="flex justify-end mb-4">
        <ButtonModalToggle
          form={createProductTypeForm()}
          modalExtraButton={modalExtraButton()}
          submitFormModalEvent={handleCreateNewProductStock}
        >
          Cadastrar Tipo de Produto
        </ButtonModalToggle>
      </div>
      <ProductTypesDataTable />
    </Layout>
  );
};

export default ProductTypes;
