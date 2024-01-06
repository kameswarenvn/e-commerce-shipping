import React, { useEffect, useState } from "react";
import Header from "../Header";
import Search from "../../components/Customsearch";
import Button from "../../components/Button";
import ProductList from "../ProductList";
import styele from "./dashboard.module.scss";
import AddCartProducts from "../CartProducts";
import Footer from "../Footer";

const MainDashboard = () => {
  const [items, setItem] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [addedItems, setAddedItem] = useState<any>([]);
  const [showAddProducts, setShowAddProducts] = useState<boolean>(false);
  const [listofcategoery, setListofCategoery] = useState<any>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>(items);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const getListofcategoery = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setListofCategoery(data));
      
  };



  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data: any) => {
        setItem(data);
        setFilteredItems(data);
      });
   
    getListofcategoery();
  }, []);

  const changingSrarchData = (e: any) => {
    setSearchValue(e.target.value);

    const itmesFilter = items.filter((item: any) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItems(itmesFilter);
  };




  const addItem = (item: any) => {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  };

  const removeItem = (item: any) => {
    const newItems = addedItems.filter(
      (addedItem: any) => addedItem.id !== item.id
    );
    setAddedItem(newItems);
  };

 

  const handleCheckboxChange = (item: string) => {
    const updatedCheckedItems = [...checkedItems];

    if (updatedCheckedItems.includes(item)) {
      const index = updatedCheckedItems.indexOf(item);
      updatedCheckedItems.splice(index, 1);
    } else {
      updatedCheckedItems.push(item);
    }

    setCheckedItems(updatedCheckedItems);
  };

  const applyhandle = () => {
    const itmesFilter = items.filter((item: any) =>
      checkedItems?.includes(item.category)
    );

    setFilteredItems(itmesFilter);
  };
  const clearhandlechange = () => {
    setCheckedItems([]);
    setFilteredItems(items);
  };
  return (
    <div className={styele.bodycontainer}>
      <div className={styele.nav}>
        <Header />
        <div className={styele.navright}>
          <Search value={searchValue} onChangeData={changingSrarchData} />
          <Button num={addedItems.length} click={setShowAddProducts} />
        </div>
      </div>
      
      {showAddProducts && (
        <AddCartProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}

      <div className={styele.productitems}>
        <div className={styele.categoery}>
          <h2>Categories</h2>
          {listofcategoery?.map((item: string) => (
            <div style={{ margin: "10px 0" }}>
              <label key={item}>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            </div>
          ))}

          <div className={styele.filteraction}>
            <button
              className={styele.applyCta}
              onClick={() => {
                applyhandle();
              }}
            >
              Apply
            </button>
            <button
              className={styele.clearCta}
              onClick={() => {
                clearhandlechange();
              }}
            >
              {" "}
              Clear
            </button>
          </div>
        </div>
        <div className={styele.productlists}>
          {filteredItems?.length > 0 ? (
            <ProductList
              products={filteredItems}
              addItem={addItem}
              removeItem={removeItem}
              addedItems={addedItems}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <p>No product found</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default MainDashboard;
