import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice.jsx'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


// Create store
// Wrap App component under Provider
// Create Slice like (CounterSlice.jsx)
// Register reduce in store