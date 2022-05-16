import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../app/firebase";
import { useState, useEffect } from "react";

export default function ChatBox() {
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    if (messages != "") {
      getMessage(id);
    }
  });
  const [messages, setMessages] = useState("");
  const getMessage = (id) => {
    db.collection("list")
      .where("id", "==", id)
      .onSnapshot(function (querySnapshot) {
        setMessages(
          querySnapshot.docs.map((doc) => ({
            userId: doc.message.userId,
            message: doc.message.text,
          }))
        );
      });
  };
  return <div>{id}</div>;
}
