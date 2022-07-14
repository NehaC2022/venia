import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    item: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    value:1,
  },
  reducers: {  
    addItem(state, action) {
      const prod = action.payload;
      const exist = state.item.findIndex((val) => val.id === prod.id);
      if (exist >=0) {
          state.cartItems[exist] = {
            ...state.item[exist],
            quantity: state.item[exist].quantity + 1,
          };
      } else {
        const prod = {...action.payload, quantity: 1 }
        state.item.push(prod);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.item.filter(
            (item) => {return item.id !== action.payload}
          );

          state.item = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.item));
        return state;
    },
    incrementQnt(state, action) {
      const increment = state.item.findIndex(
        (items) => items.id === action.payload.id
      );
      state.item[increment].quantity += 1;
      state.cartTotalAmount += state.item[increment].price;
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
    decrementQnt(state, action) {
      const decrement = state.item.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.item[decrement].quantity > 1) {
        state.item[decrement].quantity -= 1;

      } else if (state.item[decrement].quantity === 1) {
        const nextCartItems = state.item.filter(
          (item) => item.id !== action.payload.id
        );
        state.item = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
    getTotals(state, action) {
      let { total, prodQuantity } = state.item.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.prodQuantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = prodQuantity;
      state.cartTotalAmount = total;
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
  },
})

export const handleAction = cartSlice.actions

export default cartSlice.reducer