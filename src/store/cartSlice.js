import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const filtered = state.cartItems.filter(item=>item.productData.id === action.payload.productData.id)
            if (state.cartItems.length > 0) {
                if (filtered.length > 0) {
                    state.cartItems.map((cartItem) => {
                        if(cartItem.productData.id === action.payload.productData.id){
                            return cartItem.qty = cartItem.qty + action.payload.qty
                        }
                        return
                    })
                }
                else{
                    state.cartItems.push(action.payload)
                }
            } else {
                state.cartItems.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            if(state.cartItems.length> 1) {
                console.log('inif')
                console.log(action.payload)
                const newArr = state.cartItems.filter(item=>item.productData.id !== action.payload)
                // return (state.cartItems.filter(item=>item.productData.id != action.payload))
                console.log(newArr)
                state.cartItems = newArr
            } else {
                console.log('inelse')
                state.cartItems = []
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;