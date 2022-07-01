
import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";

const URLAPI = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk (
    "shop/detchProducs" ,
    () => {
       return fetch(URLAPI)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.log("error " , err))
    }
)

const initialState = {
    products : [],
    pendding : false,
}

export const shopReducer = createSlice ({
    name : "shop" , 
    initialState , 
    reducers : {
    },
    extraReducers : {
        [fetchProducts.pending] : (state , action) => {
            state.pendding = false;
        } ,
        [fetchProducts.fulfilled] : (state , action) => {
            state.products = action.payload;
            state.pendding = true;
        },
        [fetchProducts.rejected] : (state , action) => {
            state.pendding = true;
        }
    }

})



export default shopReducer.reducer