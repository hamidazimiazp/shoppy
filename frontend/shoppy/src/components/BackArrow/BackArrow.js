import React from "react";
import styles from "./BackArrow.module.css";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.arrow} onClick={() => navigate(-1)}>
      <TbArrowNarrowLeft color="#fe5d42" size={45} />
    </div>
  );
};

export default BackArrow;
