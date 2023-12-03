import React, { useEffect } from "react";
import styles from "../../styles/Login.module.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useTwitterConnection } from "@ekaruz/react-social-auth";
import InnerCard from "../common/InnerCard";

export default function LoginCard() {
  const navigate: any = useNavigate();
  const { onTwitterConnect, isLoading, twitterData } = useTwitterConnection({
    clientId: process.env.REACT_APP_TWITTER_CLIENT_ID as string,
    redirect_uri: "http://www.localhost:3001/oauth/twitter" as string,
    isOnlyGetCode: false,
    isOnlyGetToken: false,
    onReject: () => {
      navigate("/");
    },
    onResolve({ provider, data }) {
      localStorage.setItem("user", JSON.stringify(twitterData));
    },
    clientKeys: `${
      (process.env.REACT_APP_TWITTER_CLIENT_ID +
        ":" +
        process.env.REACT_APP_CLIENT_SECRET) as string
    }`,
  });

  return (
    <InnerCard>
      <Button className={styles.Button} onClick={onTwitterConnect}>
        <img
          className={styles.xIcon}
          src={require("../../assets/images/x.png")}
        />
        {" Login with x"}
      </Button>
    </InnerCard>
  );
}
