import React from "react";
import Nav from "./Component/Nav";
import Main from "./Component/Main";
import "./Home.css";
export default function Home({ userInfomation }) {
  return (
    <div className="flex">
      <div className="home">
        <Nav userInfomation={userInfomation}></Nav>
        <Main userInfomation={userInfomation}></Main>
      </div>
    </div>
  );
}
