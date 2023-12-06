const url = 'https://api.twitter.com/2/oauth2/token';
const code = 'VGNibzFWSWREZm01bjN1N3dicWlNUG1oa2xRRVNNdmVHelJGY2hPWGxNd2dxOjE2MjIxNjA4MjU4MjU6MToxOmFjOjE';
const grantType = 'authorization_code';
const clientId =`${process.env.REACT_APP_TWITTER_CLIENT_ID}`
const redirectUri = 'https://www.example.com';
const codeVerifier = 'challenge';





export const getUserAccessToken = async (code:string): Promise<any> => {
   try {
  const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});
  const data = new URLSearchParams({
  'code': code,
  'grant_type': grantType,
  'client_id': clientId,
  'redirect_uri': redirectUri,
  'code_verifier': codeVerifier
});
const options = {
  method: 'POST',
  headers: headers,
  body: data,
};
  
    const res = await fetch(url, {...options,mode:'no-cors'});
    return await res.json();
  } catch (error: any) {
    console.log(error.message);
  }
 
}
