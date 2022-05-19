import React from "react";
import "./Label.css";
export default function Label({ data }) {
  return (
    <div className="flex column label">
      {data.map((el, index) => {
        return (
          <div className={`${index % 2 == 0 ? "left" : "right"}`}>
            <p className="userId">{el.userName}</p>
            <span className="textP">{el.text}</span>
          </div>
        );
      })}
    </div>
  );
}
