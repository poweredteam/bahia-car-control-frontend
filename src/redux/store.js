import { configureStore } from '@reduxjs/toolkit'
import { textSlice, clientSlice, serviceSlice } from './slices'

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
    clients: clientSlice.reducer,
    service: serviceSlice.reducer
  }
})

export default store
