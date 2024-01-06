import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./productdetails.module.scss";

const ProductDetails = () => {
  const location = useLocation();
  const productID = location?.state?.productid;

  const [productdetail, setProductdetails] = useState<any>({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productID}`)
      .then((product) => {
        setProductdetails(product.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <>
      {Object.keys(productdetail).length === 0 ? (
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          Loading.....
        </h2>
      ) : (
        <div className={styles.productdetaiilCotaiiner}>
          <div className={styles.product}>
            <img src={productdetail.image} alt="img" />
            <div>
              <h3>Category : {productdetail?.category}</h3>
              <h5>{productdetail?.title}</h5>

              <p>{productdetail?.description}</p>
              <p style={{ fontWeight: "500", color: "#000" }}>
                Price : ${productdetail?.price}
              </p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetails;
