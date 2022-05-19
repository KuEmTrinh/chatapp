import React from "react";
import List from "./List";
import { Routes, Route, Link } from "react-router-dom";
import ChatBox from "./ChatBox";
import "./Main.css";
export default function Main({userInfomation}) {
  return (
    <div className="main">
      <List userInfomation={userInfomation}></List>
      <Routes>
        <Route path="/:id" element={<ChatBox userInfomation={userInfomation}/>} />
      </Routes>
    </div>
  );
}
