import React, { useReducer, useEffect } from "react";
import styles from './cartlist.module.scss'

const reducer =(state:any, action:any) =>{
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber === 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}

interface cartlisthDataType {
    item: any;
    removeItem: any;
    setAddedItem:any;
    itemsArr:any
  }
const CardList = ({ item, removeItem, setAddedItem, itemsArr }:cartlisthDataType) => {
  const [state, dispatch] = useReducer(reducer, item);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr:any) => {
      itemArr.id === item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state]);

  return (
    <div className={styles.cardlistbody}>
      <img src={item.image} className={styles.cardlistimg} alt="" />
      <button
        className={styles.deletebtn}
        onClick={() => {
          setTimeout(() => removeItem(item), 190);
        }}
      >
        ✘
      </button>
      <h4>{item.title}</h4>
      <hr />
      <div className={styles.cardListAddminubody}>
        <p>Price : ${item.price}</p>
        <div className={styles.plusItemsminu}>
          <button
            className={styles.plusbtn}
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            +
          </button>
          <span className={styles.numofitems}>{item.addNumber}</span>
          <button
            className={styles.minubtn}
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
