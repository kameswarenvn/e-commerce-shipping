import React, { useEffect } from "react";
import { useState } from "react";
import styles from './customcard.module.scss'
import { useNavigate } from "react-router-dom";

interface cardDataType {
    product: any;
    addItem: any;
    removeItem:any;
    addedItems:any
  
  }

const CustomCard = ({ product, addItem, removeItem, addedItems }:cardDataType) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem:any) => addedItem.id === product.id);
  useEffect(() => {
    item.length === 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  const navigate =useNavigate()

  return (
    <div className={styles.card} >

      <img className={styles.cardimg} src={product.image} alt="" onClick={()=>{
        navigate('/productdetails',{state:{
            productid:product?.id
        }})
    }}/>
      <div onClick={()=>{
        navigate('/productdetails',{state:{
            productid:product?.id
        }})
    }}>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>

      <div className={styles.cardpriceadd}>
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? styles.additembtn :styles.removeitembtn}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD " : "CANCLE"}
        </button>
      </div>
    </div>
  );
};

export default CustomCard
