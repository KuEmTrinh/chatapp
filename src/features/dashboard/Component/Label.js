import React from "react";
import "./Label.css";
export default function Label({ data }) {
  return (
    <div className="flex column label">
      {data.map((el, index) => {
        return (
          <div className={`textBox ${index % 2 == 0 ? "left" : "right"}`}>
            <p className="userId">{el.userId}</p>
            <span className="textP">{el.text}</span>
          </div>
        );
      })}
    </div>
  );
}
