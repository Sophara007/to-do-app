import React, { useEffect, useState, useCallback } from "react";
import { getQuote } from "../data/stasticData.jsx";

 function Quote() {
    const [quote, setQuote] = useState(null);

    const fetchQuote = useCallback(async () => {
        try {
            const data = await getQuote();
            setQuote(data);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    }, []);

    useEffect(() => {
        fetchQuote();
        const intervalId = setInterval(fetchQuote, 40000);

        return () => clearInterval(intervalId);
    }, [fetchQuote]);

    if (!quote) {
        return <p>Loading...</p>;
    }

    return (
        <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 shadow-2xl font-serif">
            {quote.text}
        </p>
    );
}
export const Quotes = React.memo(Quote);