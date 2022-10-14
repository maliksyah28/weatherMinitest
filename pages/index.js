import { useEffect, useState } from "react";

import axios from "axios";

import ForecastList from "../components/Forecast";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [list, setlist] = useState([]);
  let keyAPI = "950a399e177b3cc9a64792f63757347d";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${keyAPI}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setlist(response.data.list);
        // console.log(response.data);
      });
      setLocation("");
    }
  };

  console.log(list);
  const renderListWeather = () => {
    return list.map((x, i) => {
      return (
        <ForecastList
          location={location}
          tanggal={x.dt_txt}
          temperature={x.main.temp}
        />
      );
    });
  };

  return (
    <>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div>{renderListWeather()}</div>
    </>
  );
}
