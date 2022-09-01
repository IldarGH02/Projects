import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../../components/Header/header";
import getOpenWeather from "../../services/getOpenWeather";
import getWeatherApi from "../../services/getWeatherApi";
import "./weather.css";

const Weather = () => {
  const [weather, setWeather] = useState({country: "", name: "", temp: 0})
  const [weatherOpen, setWeatherOpen] = useState({country: "", name: "", temp: 0})
  const [input, setInput] = useState();
  const [tabIndex, setTabIndex] = useState(0);

  return <> <Header/>
        <div className="weather pt-20">
          <div className="container weather__container flex flex-col items-center p-20 max-w-2xl">
            <h2 className="weather__title text-2xl font-semibold mb-5">ПОГОДА</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <TabList className="flex justify-between mb-5">
              <Tab className="weather__choise btn">WeatherApi</Tab>
              <Tab className="weather__choise btn">OpenWeather</Tab>
            </TabList>            
              <TabPanel>
                <div className="weather__choise-city mb-5">
                  <button
              className="weather__change__btn btn mr-5"
              onClick={(event) =>
                getOpenWeather(input)
                  .then((resp) => {
                    setWeather({
                      country: resp.sys.country,
                      name: resp.name,
                      temp: resp.main.temp - 273.15,
                    });
                  })
                  .catch((error) => {
                    console.log(error.message);
                  })
              }
            >
              Выбрать город
                   </button>
                    <input
                      type="text"
                      className="weather__change__input"
                      placeholder="Введите название города"
                      onChange={(event) => setInput(event.target.value)}
                    />
                </div>             
                  <p className="weather__info">Страна: {weather.country}</p>
                  <p className="weather__info">Город: {weather.name}</p>
                  <p className="weather__info">Температура: {Math.trunc(weather.temp)} &deg;C</p>
              </TabPanel>
              <TabPanel>
                  <div className="weather__choise-city mb-5">
                      <button
                          className="weather__change__btn btn mr-5"
                          onClick={(event) =>
                            getWeatherApi(input)
                          .then((resp) => {
                              setWeatherOpen({
                                country: resp.sys.country,
                                name: resp.name,
                                temp: resp.main.temp - 273.15,
                            });
                          })
                            .catch((error) => {
                            console.log(error.message);
                            })
                          }
                          >
                          Выбрать город
                        </button>
                        <input
                          type="text"
                          className="weather__change__input"
                          placeholder="Введите название города"
                          onChange={(event) => setInput(event.target.value)}
                        />
                  </div>             
                    <p className="weather__info">Страна: {weatherOpen.country}</p>
                    <p className="weather__info">Город: {weatherOpen.name}</p>
                    <p className="weather__info">Температура: {Math.trunc(weatherOpen.temp)} &deg;C</p>
              </TabPanel>     
            </Tabs>                  
          </div>
        </div>
          
          </>
}

export default Weather
