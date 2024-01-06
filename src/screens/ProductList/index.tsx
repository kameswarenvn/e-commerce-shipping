import React from "react";
import styles from './product.module.scss'
import CustomCard from "../../components/customCard";

interface productDataType {
  products: any;
  addItem: any;
  removeItem:any;
  addedItems:any
}

const ProductList = ({ products, addItem, removeItem, addedItems }:productDataType) => {
  products.map((product:any) => (product.isAdded = true));
  return (
    <div className={styles.productbody}>
      {products.map((product:any) => (
        <CustomCard
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default ProductList;