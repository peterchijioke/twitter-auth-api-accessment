import React from "react";
import styles from "../../styles/Login.module.css";
import LoginCard from "./LoginCard";

export default function LoginLayout() {
  return (
    <div className={styles.LoginLayout}>
      <LoginCard />
    </div>
  );
}
