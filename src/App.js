// import { usePosition } from "use-position";
import { useEffect, useState } from "react";

//! Api Requets Library
import axios from "axios";

//! Components
import Header from "./components/Header";
import InfoTop from "./components/InfoTop";
import Daily from "./components/Daily";



const App = () => {
  const api_key = process.env.REACT_APP_API_KEY; //! Get Api Key from .env
  //! http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no

  const [daily, setDaily] = useState([])
  const [location, setLocation] = useState("")
  const [current, setCurrent] = useState([])
  const [query, setQuery] = useState("")
  const [error, setError] = useState()

  useEffect(() => {
    setCurrent([])
    setDaily(false)
    setLocation(false)
    getWeatherCurrentPos(query)

    // eslint-disable-next-line
  }, [query])

  const getWeatherCurrentPos = async (query) => {
    try {
      const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${query}&days=7&aqi=no&alerts=no`)
      setError(0)
      setCurrent(data.current)
      setDaily(data.forecast.forecastday)
      setLocation(data.location)
    }
    catch (error) {
        if (error?.response?.status === 400 && query) {
          setCurrent(false)
          setDaily(false)
          setLocation(false)
          setError(400)
        }
        if(error?.message === "Network Error" && query){
          setCurrent(false)
          setDaily(false)
          setLocation(false)
          setError(300)
        }
        
        
    }
  }

  return (
    <div className="w-full xl:w-2/3 mx-auto py-5 flex flex-col gap-4 h-full">
      <Header setQuery={setQuery} />
      {location ? <>
        <InfoTop currentWeather={current} location={location} />
        <Daily dailyWeather={daily} /> </>
        : <div className="flex flex-col h-full justify-center">
          {error === 400 && !location ? <h1 className="shadow-lg  rounded-xl bg-red-500 text-white p-5 text-center text-2xl">Not Found</h1> : <h1 className="shadow-lg  rounded-xl bg-slate-500 text-white p-5 text-center text-2xl">Search City Name</h1>}
          {error === 300  ?  <h1 className="shadow-lg rounded-xl bg-red-500 text-white p-5 text-center text-2xl">Connection Failed</h1> : null}
        </div>
      }
    </div>
  );
}

export default App;
