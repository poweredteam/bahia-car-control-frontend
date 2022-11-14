import { configureStore } from '@reduxjs/toolkit'
import { textSlice, clientSlice } from './slices'

const store = configureStore({
  reducer: {
<<<<<<< HEAD
    text: textSlice.reducer
=======
    text: textSlice.reducer,
    clients: clientSlice.reducer
>>>>>>> d-router
  }
})

export default store
