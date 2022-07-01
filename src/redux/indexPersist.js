import counterSlice from './features/counterSlice' ;
import { combineReducers, configureStore } from "@reduxjs/toolkit" ;
import todoSlice from './features/todoSlicer' ;

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

console.log("hello from store")
const persistConfig = {
  key : 'root',
  storage,
}
const rootReducer = combineReducers({
  counter : counterSlice ,
  todo : counterSlice,
})

const persisted = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer:  persisted ,
    middleware : [thunk],

})

export const persistor = persistStore(store)
