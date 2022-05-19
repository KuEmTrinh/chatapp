import React from "react";
import { useState, useEffect } from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "../../../app/firebase";
import { setListDataFirebase } from "./listSlice";
import NewList from "./NewList";
export default function List() {
  const [listData, setListData] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    console.log("running");
    db.collection("list")
      .orderBy("name")
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.docs.map((doc) => {
          data.push({
            id: doc.id,
            name: doc.data().name,
            status: doc.data().status,
          });
        });
        setListData(data);
        dispatch(setListDataFirebase(data));
      });
  }, []);
  return (
    <>
      {listData ? (
        <div className="flex column list">
          {listData.map((el, index) => {
            return (
              <button
                onClick={() => {
                  // chuyển màn hình qua code logic js
                  navigate(`/${el.id}`);
                }}
                key={index}
                className="channelButton"
              >
                {el.name}
              </button>
            );
          })}
          <NewList />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
