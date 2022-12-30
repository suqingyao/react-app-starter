import { AppDispatch, RootState } from '..'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload
    },
    decrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value -= actions.payload
    }
  }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  CounterSlice.actions

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1500)
}

export const counterSelector = (state: RootState) => state.counter.value

export default CounterSlice.reducer
