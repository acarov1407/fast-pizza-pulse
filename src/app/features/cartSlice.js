import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    MAX_QUANTITY_PER_ITEM: 5
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // payload: cartItem object
            state.cart.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            // payload: pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            // payload: pizzaId
            const existingItem = state.cart.find(item => item.pizzaId === action.payload);
            if (existingItem.quantity < state.MAX_QUANTITY_PER_ITEM) {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
            }
        },
        decreaseItemQuantity: (state, action) => {
            // payload: pizzaId
            const existingItem = state.cart.find(item => item.pizzaId === action.payload);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
            }

        },
        clearCart: (state) => {
            state.cart = initialState.cart;
        }
    }
})

export const { addToCart, deleteFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart.cart;

export const selectSubtotalCartPrice = createSelector(
    [state => state.cart.cart],
    cart => cart.reduce((accumulator, item) => item.totalPrice + accumulator, 0)
);

export const selectCurrentQuantityById = createSelector(
    [
        state => state.cart.cart,
        (state, id) => id

    ],
    (cart, id) => cart.find(item => item.pizzaId === id)?.quantity ?? 0
)

