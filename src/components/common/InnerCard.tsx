import React from "react";
import styles from "../../styles/Login.module.css";
export default function InnerCard({ ...props }) {
  return <div className={styles.LoginCard} {...props} />;
}
