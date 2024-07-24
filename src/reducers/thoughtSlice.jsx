import { createSlice } from "@reduxjs/toolkit";

// Create a slice with a name, initial state, and reducers
const thoughtSlice = createSlice({
    name: "thought",
    initialState: {
        thoughts: [
            { id: 1, text: 'This is a static thought example 1.', done: false },
            { id: 2, text: 'This is a static thought example 2.', done: true },
            { id: 3, text: 'if you see this your app work.', done: false }
        ]
    },
    reducers: {
        addThought: (state, action) => {
            state.thoughts.push(action.payload);
        },
        removeThought: (state, action) => {
            state.thoughts = state.thoughts.filter(thought => thought.id !== action.payload);
        },
        updateDone: (state, action) => {
            const { id, done } = action.payload;
            const thoughtToUpdate = state.thoughts.find(thought => thought.id === id);
            if (thoughtToUpdate) {
                thoughtToUpdate.done = done;
            }
        }
    }
});

// Export actions
export const { addThought, removeThought, updateDone } = thoughtSlice.actions;

// Export selector
export const selectThought = (state) => state.thought.thoughts;

// Named export of the reducer
export default thoughtSlice.reducer;
