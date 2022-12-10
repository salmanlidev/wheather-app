// import { useState } from "react"
// import { BsSuitHeartFill , BsSuitHeart } from "react-icons/bs"


const InfoTop = ({ location , currentWeather }) => {
    const word = location.region.split(",")
    // const [ heart , setHeart ] = useState(false)

    // const handleButton = () => {
    //     setHeart(!heart)
    // }

    return(
        <div className="flex flex-col bg-zinc-800 text-white w-[22rem]  md:w-96 rounded-xl items-center justify-center py-4 shadow-indigo-200 shadow-lg self-center">
            {/* <div><button onClick={handleButton} type="button" className="text-3xl">{heart ? <BsSuitHeartFill /> : <BsSuitHeart />}</button></div> */}
            <div className="flex items-center gap-32">
                <div className="flex flex-col items-start">
                    <h1 className="text-2xl">{word[0]}</h1>
                    <h5 className="font-thin">{currentWeather.condition.text}</h5>
                </div>
                <img className="flex items-center justify-center" src={currentWeather.condition.icon} alt="icon" />
            </div>
            <div className="flex items-center gap-7">
                <h1 className="text-6xl">{Math.floor(currentWeather.temp_c
)}&#176;C</h1>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col text-lg text-center">
                        <h6>Wind</h6>
                        <h6>Feels like</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div className="flex flex-col text-sm gap-2 font-light">
                        <h6>{currentWeather.wind_kph
} k/s</h6>
                        <h6>{Math.floor(currentWeather.feelslike_c
)}&#176;C</h6>
                        <h6>{currentWeather.humidity
}%</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoTop;