import React from "react";
import List from "./List";
import { Routes, Route, Link } from "react-router-dom";
import ChatBox from "./ChatBox";
import "./Main.css";
export default function Main() {
  return (
    <div className="main">
      <List></List>
      <Routes>
        <Route path="/:id" element={<ChatBox />} />
      </Routes>
    </div>
  );
}
