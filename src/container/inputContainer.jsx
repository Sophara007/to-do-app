import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { addThought, selectThought } from '../reducers/thoughtSlice';
import {ThoughtInput} from "../components/thoughtInput.jsx";

export function InputContainer() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const thoughts = useSelector(selectThought); // Use selectThoughts

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            dispatch(addThought({
                id: Date.now(),
                text: input,
                done: 'Not Done' // Example initial state
            }));
            setInput('');
        }
    };

    return (
        <ThoughtInput
            handleInputChange={handleInputChange}
            input={input}
            handleKeyPress={handleKeyPress}
        />
    );
}


