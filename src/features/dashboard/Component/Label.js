import React from "react";
import "./Label.css";
import { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { db } from "../../../app/firebase";
export default function Label({ messages, userInfomation, channelId }) {
  const [hoverOn, setHoverOn] = useState(false);
  const [elIndex, setElIndex] = useState("");
  const commentLike = (id) => {
    // console.log("channel Id: " + id);
    const likeData = {
      userName: userInfomation.displayName,
      uid: userInfomation.uid,
      likeStatus: true,
    };
    db.collection("list")
      .doc(channelId)
      .collection("message")
      .doc(id)
      .collection("like")
      .add(likeData);
  };
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
              onClick={() => {
                setHoverOn(!hoverOn);
                setElIndex(index);
              }}
            >
              {el.message}
            </span>
            {hoverOn && elIndex == index ? (
              <div className="likeButton">
                <ThumbUpAltIcon
                  onClick={() => {
                    commentLike(el.id);
                  }}
                />
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
