import React, { useEffect, useState } from "react";

function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dosnoventa.herokuapp.com/bikes");
      const bikesData = await response.json();
      setData(bikesData);
    };
    fetchData();
  }, []);

  return (
    <div className="slider">
      {data.map((bike) => (
        <div className="bike" key={bike.bike_id}>
          <img className="bike-img" src={bike.img}></img>
          <h3 className="bike-name">{bike.name}</h3>
          <h2 className="bike-price">{bike.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default Slider;
