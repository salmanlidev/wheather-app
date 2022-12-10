import { useState } from "react";

const DailyItem = ({ weat }) => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const d = new Date(weat.date);
    let day = d.getDay();
    let week = ""

    switch (day) {
        case 1:
            week = "Monday"
            break;
        case 2:
            week = "Tuesday"
            break;
        case 3:
            week = "Wednezday"
            break;
        case 4:
            week = "Thursday"
            break;
        case 5:
            week = "Friday"
            break;
        case 6:
            week = "Saturday"
            break;
        default:
            week = "Sunday"

    }

    return (
        <div onClick={handleShow} className="w-full flex-col flex items-center bg-gray-400 rounded-2xl relative cursor-pointer">
            <div className="w-full  flex items-center justify-between">
                <div className="flex items-center">
                    <img className=" w-20" src={weat.day.condition.icon} alt="icon" />
                    <h1 className="font-bold text-zinc-800 text-xl">{week}</h1>
                </div>
                <div className="flex items-center gap-x-5 pr-5">
                    <h5 className="text-zinc-800">{weat.day.condition.text}</h5>
                    <h6 className="text-gray-200">{Math.floor(weat.day.avgtemp_c)}&#176;C</h6>
                </div>
            </div>
            {show ? <div className="w-full">
                <div className="w-full py-1  md:p-4 bg-slate-300 top-20 left-0 flex items-center justify-between px-1 md:px-10 shadow-sm rounded-b-lg text-zinc-700">
                    <div className="flex items-center gap-x-5">
                        <div className="flex flex-col items-start gap-1">
                            <h5>Max Temp</h5>
                            <h5>Min Temp</h5>
                            <h5>Snow</h5>
                        </div>
                        <div className="flex flex-col items-start gap-1 text-zinc-500">
                            <h3>{Math.floor(weat.day.maxtemp_c)
                            }</h3>
                            <h3>{Math.floor(weat.day.mintemp_c
                            )}</h3>
                            <h3>{weat.day.daily_chance_of_snow

                            }%</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="flex flex-col items-start gap-1">
                            <h5>Humidity</h5>
                            <h5>Wind Speed</h5>
                            <h5>Rain</h5>
                        </div>
                        <div className="flex flex-col items-start gap-1 text-zinc-500">
                            <h3>{weat.day.avghumidity
                            }%</h3>
                            <h3>{weat.day.avgvis_km
                            } m/s</h3>
                            <h3>{weat.day.daily_chance_of_rain

                            }%</h3>
                        </div>
                    </div>
                </div>
            </div> : null}

        </div>
    )
}

export default DailyItem;