import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Launches.css";
const Launches = () => {
  const [Launches, setLaunches] = useState([]);
  const [allLaunches, setAllLaunches] = useState([]);
  const [searchQry, setSearchQry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getLaunchesData();
  }, []);

  const getLaunchesData = () => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((json) => {
        console.log("Launchesjson", json);
        setLaunches(json);
        setAllLaunches(json);
      });
  };
  const goToDetailsPage = (item: any) => {
    navigate(`/Launches/${item.flight_number}`);
  };
  const searchByName = (ev: any) => {
    console.log("ev", ev.target.value);
    setSearchQry(ev.target.value);
    const temp = allLaunches.filter((item: any) => {
      console.log("item.mission_name", item.mission_name);
      const launchesname = item.mission_name.toLowerCase();
      const qry = ev.target.value.toLowerCase();
      return launchesname.includes(qry);
    });
    console.log("temp", temp);
    setLaunches(temp);
  };
  return (
    <div className="Launches_header">
      <input
        className="launchsearch"
        placeholder="Search"
        value={searchQry}
        onChange={(ev: any) => searchByName(ev)}
      />
      <div className="launches-sec">
        {Launches.map((item: any, index: number) => (
          <div key={index}>
            <p>{item.mission_name}</p>
            <img
              src={item.links.mission_patch}
              style={{ width: 150, height: 150 }}
            />
            <br></br>
            <button className="btn1" onClick={() => goToDetailsPage(item)}>
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Launches;
