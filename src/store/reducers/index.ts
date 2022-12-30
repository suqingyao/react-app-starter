import { combineReducers } from '@reduxjs/toolkit'
import CounterSlice from './counter'

const rootReducers = combineReducers({
  counter: CounterSlice
})

export default rootReducers
