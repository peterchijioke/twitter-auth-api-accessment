const {REACT_APP_TWITTER_CLIENT_ID}=process.env
const TWITTER_CLIENT_ID = "T1dLaHdFSWVfTnEtQ2psZThTbnI6MTpjaQ" 
export const TWITTER_STATE = "twitter-increaser-state";
const TWITTER_CODE_CHALLENGE = "y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8"
const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";
const TWITTER_SCOPE = ["tweet.read", "users.read", "offline.access"].join(" ");


export const getTwitterOAuthUrl = () =>
  {
  const options:any = {
    redirect_uri: "http://www.localhost:3001/oauth/twitter",
    client_id: REACT_APP_TWITTER_CLIENT_ID,
    state: "state",
    response_type: "code",
    code_challenge: TWITTER_CODE_CHALLENGE,
    code_challenge_method: "S256",
    scope:TWITTER_SCOPE
  };
  const qs = new URLSearchParams(options).toString();
  return `${TWITTER_AUTH_URL}?${qs}`;
}




  
 