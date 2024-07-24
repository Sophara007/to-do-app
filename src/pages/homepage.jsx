import { useState, useEffect } from "react";
import { getPhoto } from "../data/stasticData.jsx";
import { InputContainer } from '../container/inputContainer.jsx';
import { ThoughtTable } from "../container/thoughtTable.jsx";
import { WeatherTeller } from "../components/weatherTeller.jsx";
import { Quotes } from "../components/quotes.jsx";

export function HomePage() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const data = await getPhoto(); // Call getPhoto as a function
                setPicture(data);
            } catch (error) {
                console.error("Error fetching photo:", error);
            }
        };

        fetchPhoto();

    }, []);

    const handleSwipeRight = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % picture.length);
    };

    const handleSwipeLeft = () => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + picture.length) % picture.length);
    };

    return (
        <div
            className="bg-cover bg-center h-screen w-screen"
            style={{ backgroundImage: `url(${picture[currentImgIndex]?.urls?.full})` }}
        >
            <WeatherTeller />
            <InputContainer />
            <div className="flex justify-center mt-12 h-3/6">
                <ThoughtTable handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} currentImgIndex={currentImgIndex} />
            </div>
            <Quotes />
        </div>
    );
}
