import { useState, useEffect, useCallback, useMemo } from "react";
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
                const data = await getPhoto();
                setPicture(data);
            } catch (error) {
                console.error("Error fetching photo:", error);
            }
        };

        fetchPhoto();
    }, []);

    const handleSwipeRight = useCallback(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % picture.length);
    }, [picture.length]);

    const handleSwipeLeft = useCallback(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex - 1 + picture.length) % picture.length);
    }, [picture.length]);

    // Preload images
    const preloadedImages = useMemo(() => {
        return picture.map((pic) => {
            const img = new Image();
            img.src = pic.urls.full;
            return img;
        });
    }, [picture]);

    return (
        <div
            className="bg-cover bg-center h-screen w-screen"
            style={{ backgroundImage: `url(${picture[currentImgIndex]?.urls?.full})` }}
        >
            <WeatherTeller />
            <InputContainer />
            <div className="flex justify-center mt-12 h-3/6">
                <ThoughtTable handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} />
            </div>
            <Quotes />
        </div>
    );
}
