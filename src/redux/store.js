import { configureStore } from '@reduxjs/toolkit'
import { textSlice, clientSlice } from './slices'

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
    clients: clientSlice.reducer
  }
})

export default store
