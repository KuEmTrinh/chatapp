import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../app/firebase";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ChatBox() {
  const list = useSelector((state) => state?.list?.list);
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    console.log(list);
  }, []);
  return <div>ABC</div>;
}
