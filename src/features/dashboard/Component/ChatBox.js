import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Label from "./Label";
import Input from "./Input";
import "./ChatBox.css";
export default function ChatBox() {
  const list = useSelector((state) => state?.list?.list);
  const params = useParams();
  const id = params?.id;
  const [data, setData] = useState("");
  useEffect(() => {
    if (list) {
      let findData = list.filter((el) => {
        return el.id == id;
      });
      setData(findData);
    }
  }, [id]);
  return (
    <>
      {data ? (
        <div className="flex column chatBox">
          {data[0].message ? <Label data={data[0].message} /> : ""}

          <Input />
        </div>
      ) : (
        "Null"
      )}
    </>
  );
}
