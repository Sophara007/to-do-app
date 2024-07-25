import  { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addThought, selectThought } from '../reducers/thoughtSlice';
import { ThoughtInput } from '../components/thoughtInput.jsx';

export function InputContainer() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const thoughts = useSelector(selectThought); // Use selectThoughts

    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            dispatch(addThought({
                id: Date.now(),
                text: input,
                done: 'Not Done', // Example initial state
            }));
            setInput('');
        }
    }, [input, dispatch]);

    return (
        <ThoughtInput
            handleInputChange={handleInputChange}
            input={input}
            handleKeyPress={handleKeyPress}
        />
    );
}
