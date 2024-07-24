import { useEffect, useState } from "react";
import {getQuote} from "../data/stasticData.jsx";

export function Quotes() {
    const [quote, setQuote] = useState(
    []);

    useEffect(() => {
        const fetchQuote = async () => {
            const data = await getQuote();
            setQuote(data);
        };

        fetchQuote();
        const intervalId = setInterval(fetchQuote, 40000);

        return () => clearInterval(intervalId);
    }, []);

    return (

        <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-stone-950 shadow-2xl font-serif">
            {quote.text}
        </p>
    );
}
