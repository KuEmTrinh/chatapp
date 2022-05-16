import React, { useEffect } from "react";
import "./Nav.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { authentication } from "../../../app/firebase";
import { signOut } from "firebase/auth";

export default function Nav({ userInfomation }) {
  useEffect(() => {
    console.log(userInfomation);
  });
  const logOut = () => {
    signOut(authentication)
      .then(() => {
        console.log("da dang xuat");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="nav">
      <div className="userInfo flex">
        <p className="userName">{userInfomation.displayName}</p>
        <img src={userInfomation.photoURL}  className="userPhoto" />
      </div>
      <Stack direction="row">
        <div className="logoutButton">
          <Button
            variant="contained"
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </Button>
        </div>
      </Stack>
    </div>
  );
}
