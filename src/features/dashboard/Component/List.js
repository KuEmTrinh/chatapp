import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../../app/firebase";
import "./List.css";
import { useNavigate } from "react-router-dom";
export default function List() {
  let navigate = useNavigate();
  useEffect(() => {
    getList();
  });
  const [list, setList] = useState("");
  const getList = () => {
    db.collection("list").onSnapshot(function (querySnapshot) {
      setList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          status: doc.data().status,
        }))
      );
    });
  };
  return (
    <>
      {list ? (
        <div className="list">
          {list.map((el) => {
            return (
              <button
                onClick={() => {
                  navigate(`/${el.id}`);
                }}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
