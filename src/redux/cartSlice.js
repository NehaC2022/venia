import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    item: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
  cartTotalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const prod = action.payload;
      const exist = state.item.find((val) => val.id === prod.id);
      if (exist) {
        return state.item.map((val) => val.id === prod.id ? { ...val, quantity: val.quantity + 1 } : val)
      } else {
        const prod = action.payload;
        state.item.push(prod);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    incrementQnt(state, action) {
      const incrementQnt = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (incrementQnt >= 0) {
        state.cartItems[incrementQnt] = {
          ...state.cartItems[incrementQnt],
          cartQuantity: state.cartItems[incrementQnt].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

  },
})

export const handleAction = cartSlice.actions

export default cartSlice.reducer