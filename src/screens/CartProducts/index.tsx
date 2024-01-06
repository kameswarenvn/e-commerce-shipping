import React from "react";
import { useRef } from "react";
import styles from "./cartproduct.module.scss";
import CardList from "./CartLiist";

interface cartProductDataType {
  items: any;
  click: any;
  removeItem: any;
  setAddedItem: any;
}

const AddCartProducts = ({
  items,
  click,
  removeItem,
  setAddedItem,
}: cartProductDataType) => {
  const total = items
    .reduce((pre: any, cur: any) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  const showDivRef = useRef<any>(null);

  return (
    <div ref={showDivRef} className={styles.addproductscontainer}>
      <div className={styles.leftside}>
        <div className={styles.checkoutcontainer}>
          <div className={styles.checkoutprint}>
            <h1 className={styles.checkouttitle}>Shopping</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th className={styles.tableitemtitle}>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, i: number) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.addNumber}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className={styles.total} colSpan={2}>
                    Total
                  </td>
                  <td className={styles.total} colSpan={2}>
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.rightside}>
        <div className={styles.rightsideheader}>
          <h1>Shopping Cart</h1>
          <div
            className={styles.close}
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          ></div>
        </div>
        <div className={styles.rightsidebody}>
          {items.map((item: any, i: any, itemsArr: any) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className={styles.rightsidefooter}>
          <div className={styles.bar}></div>
          <div className={styles.footerhead}>
            <h4>{`Subtotal (${items.length}) items`} </h4>
            <h1>${total}</h1>
          </div>
          <div className={styles.checkout}>
            <button
              className={styles.checkoutbtn}
              onClick={() => {
                // eslint-disable-next-line no-restricted-globals
                items.length >= 1 && print();
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCartProducts;
