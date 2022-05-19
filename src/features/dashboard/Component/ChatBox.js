import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../app/firebase";
import Label from "./Label";
import Input from "./Input";
import "./ChatBox.css";
export default function ChatBox({ userInfomation }) {
  const [messages, setMessages] = useState("");
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    console.log(id);
    db.collection("list")
      .doc(id)
      .collection("message")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        const mess = [];
        querySnapshot.docs.map((doc) => {
          // console.log("message id" + doc.id);
          mess.push({
            id: doc.id,
            userName: doc.data().userName,
            uid: doc.data().uid,
            message: doc.data().message,
            photoURL: doc.data().photoURL,
            createdAt: doc.data().createdAt,
          });
        });
        setMessages(mess);
      });
  }, [id]);
  return (
    <>
      {messages ? (
        <div className="flex column chatBox">
          {messages ? (
            <Label
              channelId={id}
              messages={messages}
              userInfomation={userInfomation}
            />
          ) : (
            ""
          )}

          <Input chanelId={id} userInfomation={userInfomation} />
        </div>
      ) : (
        "Null"
      )}
    </>
  );
}
