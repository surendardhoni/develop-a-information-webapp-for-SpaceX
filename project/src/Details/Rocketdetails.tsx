import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../Pages/Rocket.css";

const RocketDetail = () => {
  const [rocket, setRocket]: any = useState({});
  let params = useParams();

  useEffect(() => {
    getRocketData();
  }, []);

  const getRocketData = () => {
    console.log("params", params);
    fetch(`https://api.spacexdata.com/v3/rockets/${params.rocket_id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setRocket(json);
      });
  };
  return (
    <div className="rocket_color">
      <div className="rocket_center" style={{ textAlign: "center" }}>
        <p>{rocket.rocket_name}</p>
        <img
          src={rocket.flickr_images?.length > 0 ? rocket?.flickr_images[0] : ""}
          style={{ width: 200, height: 150 }}
        />
        <p style={{ width: "900px", fontSize: "20px", marginLeft: "170px" }}>
          {rocket?.description}
        </p>
      </div>
    </div>
  );
};

export default RocketDetail;
