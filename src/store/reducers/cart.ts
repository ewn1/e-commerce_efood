import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FoodItem } from '../../types'

type CartState = {
  items: FoodItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FoodItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const indexParaRemover = action.payload
      state.items.splice(indexParaRemover, 1)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
  },
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
