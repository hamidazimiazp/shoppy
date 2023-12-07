import React from "react";
import { ImSearch } from "react-icons/im";
import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch, searchHandler }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
