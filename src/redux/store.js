import { configureStore } from '@reduxjs/toolkit'
import { textSlice } from './slices'

const store = configureStore({
  reducer: {
    text: textSlice.reducer
  }
})

export default store
