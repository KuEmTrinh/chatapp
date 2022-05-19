import React from "react";
import "./Label.css";
import { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
export default function Label({ messages, userInfomation }) {
  const [hoverOn, setHoverOn] = useState(false);
  const [elIndex, setElIndex] = useState("");
  return (
    <div className="flex column label">
      {messages.map((el, index) => {
        return (
          <div
            className={
              userInfomation.uid === el.uid
                ? "right messageLabel green"
                : "left messageLabel"
            }
            key={index}
          >
            <div className="flex labelInfo">
              <img src={el.photoURL} className="labelPhoto" />
              <p className="userId">{el.userName}</p>
            </div>
            <span
              className="textP"
              onMouseOver={() => {
                setHoverOn(true);
                setElIndex(index);
              }}
              onMouseLeave={() => {
                setHoverOn(false);
              }}
            >
              {el.message}
            </span>
            {hoverOn && elIndex == index ? (
              <div className="likeButton">
                <ThumbUpAltIcon className="z-index: 2" onClick={() => {
                  console.log("hello")
                }} />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
