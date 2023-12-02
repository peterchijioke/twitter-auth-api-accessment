import React from "react";
import styles from "../../styles/Login.module.css";
import Button from "../common/Button";
import { getTwitterOAuthUrl } from "../../helpers/getTwitterAuthUrl";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div className={styles.LoginCard}>
      <Link className={styles.Button} to={getTwitterOAuthUrl()}>
        <img
          className={styles.xIcon}
          src={require("../../assets/images/x.png")}
        />
        {" Login with x"}
      </Link>
    </div>
  );
}
