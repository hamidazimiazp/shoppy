import React, { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../../utils/tools/tools";
import styles from "./SideBar.module.css";
import { getCategories } from "../../services/service";
// import { categories } from "../../constant/list";

const SideBar = ({ query, setQuery }) => {
  const [categories, setCategories] = useState([]);

  const categorieHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
    e.target.classList.add("selected");
  };

  useEffect(() => {
    const gett = async () => {
      setCategories([{ id: 0, title: "All" }, ...(await getCategories())]);
    };
    gett();
  }, []);

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Ctegories</p>
      </div>
      <ul onClick={categorieHandler}>
        {categories &&
          categories.map((category) => (
            <li
              key={category.id}
              className={
                category.title.toLowerCase() === query.category
                  ? styles.selected
                  : null
              }
            >
              {category.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
