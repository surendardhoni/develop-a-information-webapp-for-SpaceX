import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../Pages/Launches.css";

const Launchesdetails = () => {
  const [launches, setlaunches]: any = useState({});
  let params = useParams();
  console.log("launches", launches);
  useEffect(() => {
    getLaunchesData();
  }, []);

  const getLaunchesData = () => {
    console.log("params", params);
    fetch(`https://api.spacexdata.com/v3/launches/${params.flight_number}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setlaunches(json);
      });
  };
  return (
    <div className="details_color">
      <div className="details_center">
        <p>{launches.flight_number}</p>
        <img
          src={launches.links?.mission_patch}
          style={{ width: 200, height: 180 }}
        />
        <p>{launches.mission_name}</p>
        <p>{launches.details}</p>
      </div>
    </div>
  );
};

export default Launchesdetails;
