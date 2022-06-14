import { configureStore } from "@reduxjs/toolkit";
import DishSlice from "../features/DishSlice";

export default configureStore({
    reducer:{
        dish:DishSlice,
    }
});