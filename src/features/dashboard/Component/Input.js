import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "./Input.css";
import { db } from "../../../app/firebase";
import { firebase } from "../../../app/firebase";
export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [userInfomation, setUserInfomation] = useState("");
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  const sendMessage = () => {
    console.log(inputValue);
    console.log(userInfomation.displayName)
  };
  const setInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserInfomation(user);
      }
    });
  }
  useEffect(()=> {
    setInfo();
  },[])
  return (
    <div className="inputPlace">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-textarea"
          label="Message"
          placeholder="input message"
          multiline
          variant="standard"
          onChange={changeValue}
        />
      </Box>

      <Stack alignItems="center">
        <Button
          variant="outlined"
          href="#outlined-buttons"
          onClick={() => {
            sendMessage();
          }}
        >
          Send
        </Button>
      </Stack>
    </div>
  );
}
