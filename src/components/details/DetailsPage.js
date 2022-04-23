import React, { useEffect } from 'react';
import { IoIosPin } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import {
  WiDaySunny,
  WiDayThunderstorm,
  WiDaySnowWind,
  WiDayRain,
  WiCloudy,
  WiDayRainMix,
  WiDayHaze,
  WiDayFog,
  WiSmoke,
  WiTornado,
  WiCloudyGusts,
} from 'react-icons/wi';
import { CLEAR_DATA } from '../../redux/reducer/reducers';
import MyLoader from './Loader';

const Details = () => {
  const city = useSelector((state) => state.dataReducer.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: CLEAR_DATA,
    });
  }, []);
  const icon = () => {
    switch (city.weather[0].main) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Thunderstorm':
        return <WiDayThunderstorm />;
      case 'Snow':
        return <WiDaySnowWind />;
      case 'Rain':
        return <WiDayRain />;
      case 'Clouds':
        return <WiCloudy />;
      case 'Drizzle':
        return <WiDayRainMix />;
      case 'Mist':
        return <WiDayFog />;
      case 'Smoke':
        return <WiSmoke />;
      case 'Fog':
        return <WiDayFog />;
      case 'Haze':
        return <WiDayHaze />;
      case 'Dust':
        return <WiDayRainMix />;
      case 'Sand':
        return <WiCloudyGusts />;
      case 'Ash':
        return <WiCloudyGusts />;
      case 'Squall':
        return <WiTornado />;
      case 'Tornado':
        return <WiTornado />;
      default:
        return <div className="none" />;
    }
  };
  return (
    <>
      {Object.keys(city).length === 0 ? (
        <div className="text-center">
          <MyLoader />
        </div>
      ) : (
        <div className="weather">
          <div className="weather-content">
            <h1 className="name">
              <IoIosPin />
              {city.name}
            </h1>
            <div className="icon">{icon()}</div>
            <h2 className="description">{city.weather[0].description}</h2>
            <h3 className="temp">
              Temp :
              {city.weather[0].temp}
              {'\u00b0'}
              F
            </h3>
            <div className="others">
              <span className="humidity">
                Humidity :
                {city.weather[0].humidity}
              </span>
              <span className="pressure">
                Pressure :
                {city.weather[0].pressure}
              </span>
              <span className="speed">
                Speed :
                {city.weather[0].speed}
              </span>
              <span className="deg">
                Deg :
                {city.weather[0].deg}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
