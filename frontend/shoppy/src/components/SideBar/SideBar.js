import React, { useEffect } from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../../utils/tools/tools";
import styles from "./SideBar.module.css";
import { categories } from "../../constant/list";

const SideBar = ({ query, setQuery }) => {
  const categorieHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
    e.target.classList.add("selected");
  };

  useEffect(() => {});

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Ctegories</p>
      </div>
      <ul onClick={categorieHandler}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              category.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
