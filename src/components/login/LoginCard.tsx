import React from "react";
import styles from "../../styles/Login.module.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useTwitterConnection } from "@ekaruz/react-social-auth";
import InnerCard from "../common/InnerCard";

// LoginCard component for handling Twitter authentication
const LoginCard: React.FC = () => {
  // Destructure values from useTwitterConnection hook
  const { onTwitterConnect, isLoading, twitterData } = useTwitterConnection({
    // Use process.env.REACT_APP_TWITTER_CLIENT_ID safely
    clientId: process.env.REACT_APP_TWITTER_CLIENT_ID as string,
    redirect_uri: "http://www.localhost:3001/oauth/twitter" as string,
    isOnlyGetCode: false,
    isOnlyGetToken: false,
    // Combine client ID and client secret for clientKeys
    clientKeys:
      `${process.env.REACT_APP_TWITTER_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}` as string,
  });

  return (
    // Render an InnerCard component to wrap the login content
    <InnerCard>
      {/* Button for initiating Twitter authentication */}
      <Button className={styles.Button} onClick={onTwitterConnect}>
        {/* X icon for the button */}
        <img
          className={styles.xIcon}
          src={require("../../assets/images/x.png")}
          alt="X Icon"
        />
        {/* Text for the login button */}
        {" Login with x"}
      </Button>
    </InnerCard>
  );
};

export default LoginCard;
