import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    item: localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
  },
  reducers: {
    addItem(state, action){
        const prod = action.payload;
        const exist = state.item.find((val)=>val.id===prod.id);
        if(exist){
            return state.item.map((val)=>val.id===prod.id ? {...val, quantity:val.quantity +1}: val)
        }else{
            const prod = action.payload;
            state.item.push(prod);
        }
        localStorage.setItem("cart",JSON.stringify(state.item));
    },
//     removeItem(state, action) {
//       const rmItemId = action.payload;
//       state.item = state.item.filter(item => {
//                   return item.id !== rmItemId;
//               })   

//       localStorage.setItem("cart", JSON.stringify(state.item));
// },
    
  },
})

export const handleAction= cartSlice.actions

export default cartSlice.reducer


