import React from "react";
import styles from './search.module.scss'

interface fetchDataType {
    value: string;
    onChangeData: any;
  
  }

const Search = ({ value, onChangeData }:fetchDataType) => {
  return (
    <div >
      <input
        className={styles?.searchinput}
        type="text"
        placeholder="Search by product name"
        value={value}
        onChange={onChangeData}
      />
    </div>
  );
};

export default Search;