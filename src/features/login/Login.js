import React from "react";
import "./Login.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { authentication } from "../../app/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebase } from "../../app/firebase";
import Home from "../dashboard/Home";
export default function Login() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userInfomation, setUserInfomation] = useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserInfomation(user);
        return setIsUserSignedIn(true);
      }
      return setIsUserSignedIn(false);
    });
  });
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isUserSignedIn ? (
        <Home userInfomation={userInfomation}></Home>
      ) : (
        <div className="box">
          <div className="box-center">
            <div className="login">
              <Stack spacing={3} direction="row">
                <Button
                  variant="contained"
                  onClick={() => {
                    loginWithGoogle();
                  }}
                >
                  Login with Google
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
