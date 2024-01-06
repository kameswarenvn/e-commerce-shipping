import React from "react";
import styles from './button.module.scss'

interface buttonDataType {
    num: any;
    click: any;
  
  }

const Button = ({ num, click }:buttonDataType) => {
  return (
    <div className={styles.cardbutton} onClick={() => click(true)}>
     CART <span>{num}</span> 
    </div>
  );
};

export default Button;