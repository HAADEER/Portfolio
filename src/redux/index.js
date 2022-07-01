import counterSlice from './features/counterSlice' ;
import { configureStore } from "@reduxjs/toolkit" ;
import todoSlice from './features/todoSlicer' ;
import  shopReducer  from './features/productSlice';

export const store = configureStore({
    reducer : {
        todo : todoSlice,
        counter : counterSlice,
        products : shopReducer ,
    }
})
