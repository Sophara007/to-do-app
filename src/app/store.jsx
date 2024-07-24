import { configureStore } from "@reduxjs/toolkit";
import thoughtReducer from "../reducers/thoughtSlice.jsx";

const store = configureStore({
    reducer: {
        thought: thoughtReducer
    }
});

export default store;
