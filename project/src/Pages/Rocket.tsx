import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rocket.css";

const Rocket = () => {
  const [Rocket, setRocket] = useState([]);
  const [allRockets, setAllRockets] = useState([]);
  const [searchQry, setSearchQry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRocketsData();
  }, []);

  const getRocketsData = () => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((json) => {
        console.log("Rocketjson", json);
        setRocket(json);
        setAllRockets(json);
      });
  };

  const goToDetailsPage = (item: any) => {
    navigate(`/rockets/${item.rocket_id}`);
  };
  const searchByName = (ev: any) => {
    console.log("ev", ev.target.value);
    setSearchQry(ev.target.value);
    const temp = allRockets.filter((item: any) => {
      console.log("item.rocket_name", item.rocket_name);
      const rocketName = item.rocket_name.toLowerCase();
      const qry = ev.target.value.toLowerCase();
      return rocketName.includes(qry);
    });
    console.log("temp", temp);
    setRocket(temp);
  };
  return (
    <div className="rocket">
      <div className="center">
        <input
          className="search"
          placeholder="search"
          value={searchQry}
          onChange={(ev: any) => searchByName(ev)}
        />
        <div className="rocketsection">
          {Rocket.map((item: any, index: number) => (
            <div key={index}>
              <h3>{item.rocket_name}</h3>
              <img src={item.flickr_images[0]} className="img-sec" />
              <button className="btn" onClick={() => goToDetailsPage(item)}>
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rocket;
