//! Component
import DailyItem from "./DailyItem";

const Daily = ({dailyWeather}) => {
    return(
        <div className="mt-5 flex flex-col gap-2">
            {dailyWeather.map((weat , key) => {
                return <DailyItem key={key} weat={weat}  />
            })}
        </div>
    )
}

export default Daily;