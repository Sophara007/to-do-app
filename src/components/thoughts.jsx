import { useEffect, useState } from "react";

export function Thoughts({ onRemove, onUpdateDone, done, text }) {
    const [bgColor, setBgColor] = useState("");

    useEffect(() => {
        const colors = [
            "bg-red-200",
            "bg-yellow-200",
            "bg-green-200",
            "bg-blue-200",
            "bg-indigo-200",
            "bg-purple-200",
            "bg-pink-200",
            "bg-teal-200",
            "bg-orange-200",
            "bg-lime-200",
            "bg-amber-200",
            "bg-emerald-200",
            "bg-cyan-200",
            "bg-sky-200",
            "bg-violet-200",
            "bg-fuchsia-200",
            "bg-rose-200"
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    }, []);

    return (
        <div className={`max-w-sm mx-auto ${done ? bgColor :'bg-transparent'  }  bg-opacity-80 shadow-lg rounded-lg overflow-hidden mt-6`}>
            <div className="p-4">
                <h2 className="text-3xl font-extrabold  text-gray-800 mb-2 font-dancing">{text}</h2>
                <div className="flex justify-between items-center">
                    <button onClick={onRemove}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none">
                        Remove
                    </button>
                    <button onClick={onUpdateDone}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none">
                        {done ? 'Done' : 'Redo'}
                    </button>
                </div>
            </div>
        </div>
    );
}
