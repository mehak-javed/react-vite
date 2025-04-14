import React, { useEffect, useRef, useState } from 'react' 
import './Weather.module.css'
import search_icon from '/src/assets/images/search.png';
import clear_icon from '/src/assets/images/clear.png';
import cloud_icon from '/src/assets/images/cloud.png';
import drizzle_icon from '/src/assets/images/drizzle.png';
import humidity_icon from '/src/assets/images/humidity.png';
import rain_icon from '/src/assets/images/rain.png';
import wind_icon from '/src/assets/images/wind.png';
import snow_icon from '/src/assets/images/snow.png';


import style from './Weather.module.css'

const Weather = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false) 
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon
    }

    const search = async (city) => {
        if(city === ""){
            alert("Add City Name: ")
            return; 
        }
        try{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metirc&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allIcons [data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                loaction: data.name,
                icon: icon
            })
        }
        catch(error){
            setWeatherData(false)
            console.log("Error In Fetching Data" , error)

        }
    }
    useEffect(()=>{
        search("Scotland")
    }, [])
  return (
    <div className= {`${style.weather}`}>
        <div className={`${style.searchBar}`}>
            <input ref= {inputRef} type="text" placeholder='Search' />
            <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
        </div>
        {weatherData? <><img src={weatherData.icon} alt="" className={`${style.weather_icon}`}/>
        <p className={`${style.temperature}`}>{weatherData.temperature} &deg;C</p>
        <p className={`${style.location}`}>{weatherData.loaction}</p>
        <div className={`${style.weather_data}`}>
            <div className={`${style.col}`}>
                <img src={humidity_icon} alt="" />
                <div>
                    <p>{weatherData.humidity} %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className={`${style.col}`}>
                <img src={wind_icon} alt="" />
                <div>
                    <p>{weatherData.windSpeed} km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        </>: <></>}
        
    </div>
  )
}

export default Weather