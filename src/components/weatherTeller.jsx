import { getWeatherData } from "../data/stasticData.jsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectThought } from "../reducers/thoughtSlice.jsx";

 function WeatherTellers() {
    const [weatherData, setWeatherData] = useState({
        location: { name: "Phnom Penh" },
        current: {
            condition: { icon: "" },
            temp_c: 0,
        },
    });

    const thoughtState = useSelector(selectThought);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const data = await getWeatherData();
                if (data && data.current && data.current.condition) {
                    setWeatherData(data);
                } else {
                    console.error("Fetched data does not have the expected structure:", data);
                }
            } catch (error) {
                console.error("Failed to fetch weather data:", error);
            }
        };

        fetchWeatherData();

        const intervalId = setInterval(fetchWeatherData, 40000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        console.log(thoughtState);
    }, [thoughtState]);

    return (
        <>
            {weatherData && weatherData.current && weatherData.current.condition && (
                <div className="max-md:h-9 max-md:text-[0.5rem] max-md:p-o max-md:mt-1   max-md:top-1 fixed right-0 top-0 m-4 text-lg sm:text-xl md:text-2xl font-extrabold flex items-center space-x-2 bg-white bg-opacity-75 p-2 rounded-lg shadow-lg">
                    <img
                        src={weatherData.current.condition.icon}
                        alt="cloud"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                        {weatherData.location.name}: {weatherData.current.temp_c}°C
                    </p>
                </div>
            )}
        </>
    );
}
export const WeatherTeller = React.memo(WeatherTellers);