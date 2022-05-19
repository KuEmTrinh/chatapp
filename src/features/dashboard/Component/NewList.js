import React from "react";
import "./NewList.css";
import { useState } from "react";
import { db } from "../../../app/firebase";

export default function NewList() {
  const [openToggle, setOpenToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const openBox = () => {
    setOpenToggle(!openToggle);
  };
  const createList = () => {
    console.log(inputValue);
    db.collection("list").add({
      name: inputValue,
      status: true,
      message: [],
    });
    setInputValue("");
    setOpenToggle(!openToggle);
  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      {openToggle ? (
        <input className="inputBox" onChange={changeInputValue}></input>
      ) : (
        ""
      )}
      {openToggle ? (
        <button
          onClick={() => {
            createList();
          }}
          className="channelButton createButton"
        >
          Confirm
        </button>
      ) : (
        <button
          onClick={() => {
            openBox();
          }}
          className="channelButton createButton"
        >
          Create
        </button>
      )}
    </>
  );
}
