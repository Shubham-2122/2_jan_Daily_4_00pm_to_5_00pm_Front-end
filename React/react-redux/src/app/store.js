import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../features/Counter/countSlice";

export const store = configureStore({
    reducer:{
        counter : countSlice
    }
})