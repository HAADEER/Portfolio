import counterSlice from './features/counterSlice' ;
import todoSlice from './features/todoSlicer' ;
import  shopReducer  from './features/productSlice';

import { combineReducers, configureStore } from "@reduxjs/toolkit" ;
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key : 'root',
  storage,
}
const rootReducer = combineReducers({
  counter : counterSlice ,
  todo : todoSlice,
  products : shopReducer ,
})

const persisted = persistReducer(persistConfig , rootReducer)

 export const store = configureStore({
     reducer:  persisted ,
     middleware : [thunk],

 })

export const persistor = persistStore(store)
