import React from 'react';
import { GoogleLogin } from "@react-oauth/google";

function Auth({ onSuccess, onFailure }) {
  const handleSuccess = (response) => {
    onSuccess(response.tokenId);
  };

  const handleFailure = (error) => {
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Auth;
