import React from "react";
import { useState, useEffect } from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListData } from "./listSlice";
export default function List() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListData());
  }, []);
  return <>List</>;
}
