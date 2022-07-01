// import {createStore} from "redux"

// import {reducer} from "./todoReducer"
// //Store
// export const store = createStore(
//     reducer
// )

import counterSlice from './features/counterSlice' ;
import { configureStore } from "@reduxjs/toolkit" ;


export const store = configureStore({
    reducer: {
        counter : counterSlice,
      },

})

