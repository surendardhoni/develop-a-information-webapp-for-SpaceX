import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./History.css";
const History = () => {
  const [History, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = () => {
    fetch("https://api.spacexdata.com/v3/history")
      .then((response) => response.json())
      .then((json) => {
        console.log("Historyjson", json);
        setHistory(json);
      });
  };
  const goToDetailsPage = (item: any) => {
    navigate(`/History/${item.id}`);
  };
  return (
    <div className="historyback">
      <div>
        {History.map((item: any, index: number) => (
          <div key={index}>
            <p>{item.id}</p>
            <img src={item?.links?.article} style={{ width: 60, height: 60 }} />
            <p>{item.details}</p>
            <button className="btn3" onClick={() => goToDetailsPage(item)}>
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
