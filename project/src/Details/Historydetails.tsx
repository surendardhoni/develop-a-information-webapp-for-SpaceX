import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../Pages/History.css";

const Historydetails = () => {
  const [history, sethistory]: any = useState({});
  let params = useParams();
  console.log("history", history);
  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = () => {
    console.log("params", params);
    fetch(`https://api.spacexdata.com/v3/history/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        sethistory(json);
      });
  };
  return (
    <div className="historyback">
      <p>{history?.id}</p>
      <p>{history?.title}</p>
      <img src={history?.links?.article} style={{ width: 60, height: 60 }} />
      <p>{history?.details}</p>
    </div>
  );
};

export default Historydetails;
