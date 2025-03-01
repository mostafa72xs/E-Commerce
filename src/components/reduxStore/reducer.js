import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart: (state , action) =>{
            state.cart = [...state.cart, action.payload ]
            console.log(state.cart)
        },
        removeItem: (state, action)=>{
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
}});

export default  cartSlice.reducer;
export const {addToCart , removeItem} = cartSlice.actions;

