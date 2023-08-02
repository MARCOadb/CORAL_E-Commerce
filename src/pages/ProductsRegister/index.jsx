import { useState } from "react";
import { createProduct } from "../../services/createProduct";
import styles from "./style.module.scss";

const ProductRegister = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const image = e.target.img.files[0];
    const productInfo = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      categoryId: e.target.categoryId.value,

      stock: e.target.stock.value,
      color: e.target.color.value,
      brand: e.target.brand.value,
      reviews: [],
      oldPrice: e.target.price.value,
    };
    await createProduct(productInfo, image).then(() => alert("Produto registrado com sucesso"));
  };
  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <label>Imagem do produto</label>
      <input required type="file" accept="image/*" id="img"></input>
      <label>Nome do produto</label>
      <input required id="name" placeholder="Nome do produto"></input>
      <label>Descrição do produto</label>
      <input required id="description" placeholder="Descrição do produto"></input>
      <label>Preço do produto</label>
      <input required id="price" pattern="^\d*(\.\d{0,2})?$" placeholder="Preço do produto"></input>
      <label>Id da categoria</label>
      <input required id="categoryId" placeholder="Id da categoria"></input>
      <label>Stock do produto</label>
      <input required type="number" id="stock" placeholder="Stock do categoria"></input>
      <label>Cor do produto</label>
      <input required id="color" placeholder="Cor do produto"></input>
      <label>Brand do produto</label>
      <input required id="brand" placeholder="Brand do produto"></input>
      <input className="display-small" required type="submit"></input>
    </form>
  );
};
export default ProductRegister;
