import React, { useState } from 'react'
import classNames from 'classnames';
import clear from './img/clear.png'
import cloudy from './img/cloudy.png'
import rain from './img/rain.png'
import snowing from './img/snowing.png'
import './Havavdurumu.css'

const api = {
    key: "017c0f5c92505c6b27975d83ca63206e",
    base: "https://api.openweathermap.org/data/2.5/",
  };
const HavaDurum = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null); // Initialize as null

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        
      });
  };
  return (
    <div className="App flex flex-col justify-center items-center mt-8">
      {/* Header */}
      <h1 className="text-3xl font-sans font-medium">Hava Durumu App</h1>

      <div className="search flex flex-row gap-2 mb-5 mt-5">
        {/* Search box */}
        <input
          type="text"
          placeholder="Enter City/Town..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-300 p-2 rounded"
        />
        <button className="bg-blue-400 p-2 rounded text-white" onClick={searchPressed}>Search</button>
      </div>

      {/* Conditional Rendering */}
      {weather && weather.main && weather.weather && (
        <>
          <div className={classNames({ 
                "flex flex-col p-12 w-[300px] items-center text-white rounded-2xl": true,
                "bg-[#dc2f02]": weather.weather[0].main == "Clear",
                "bg-[#1a759f]": weather.weather[0].main == "Clouds",
                "bg-[#213a80]": weather.weather[0].main == "Rain",
                "bg-[#0d1542]": weather.weather[0].main == "Snow",
                })}>

            <div className="yer">
              {/* Location */}
              <p>{`${weather.name}, ${weather.sys.country}`}</p>
            </div>

            <div className='img'>
                {weather.weather[0].main === "Clear" && (
                    <img src={clear} alt="Clear Weather"/>
                )}
                {weather.weather[0].main === "Rain" && (
                    <img src={rain} alt="Clear Weather"/>
                )}
                {weather.weather[0].main === "Clouds" && (
                    <img src={cloudy} alt="Clear Weather"/>
                )}
                {weather.weather[0].main === "Snow" && (
                    <img src={snowing} alt="Clear Weather"/>
                )}
            </div>
          
            <div className="sıcaklık flex p-2">
           
              {/* Temperature */}
              <p className="text-3xl">{weather.main.temp}°C</p>
            </div>

            <div className="havadurumu">
              {/* havaDurumu */}
                
              <p>{weather.weather[0].main}</p>
            </div>

            <div className='maxmini'>
              <div className='min'>
                <h5>Min</h5>
                <p>{weather.main.temp_min}°</p>
              </div>
              <div className='space'></div>
              <div className='max'>
                <h5>Max</h5>
                <p>{weather.main.temp_max}°</p>
              </div>
            </div>

            
          </div>
        </>
      )}
    </div>
  );
}

export default HavaDurum