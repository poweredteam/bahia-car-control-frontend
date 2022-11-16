import { configureStore } from '@reduxjs/toolkit'
import { textSlice, authSlice, clientSlice } from './slices'

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
    auth: authSlice.reducer,
    clients: clientSlice.reducer
  }
})

export default store
