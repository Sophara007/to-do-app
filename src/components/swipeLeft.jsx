//import ReactImg from '../assets/react.svg';
import {FaArrowLeft} from "react-icons/fa";

export function SwipeLeft({onClick}) {
    return (
        <button onClick={onClick} className=" absolute left-16 top-1/2 transform -translate-y-1/2 max-md:-translate-x-14   m-auto  h-9 w-9 bg-emerald-50 bg-opacity-15 hover:bg-blue-600 text-white rounded-full p-2 shadow-md transition duration-200 ease-in-out focus:outline-none">
            <FaArrowLeft className="h-6 w-6 text-slate-950"  />
        </button>
    );
}
