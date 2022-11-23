import { configureStore } from '@reduxjs/toolkit'
import { textSlice, clientSlice, serviceSlice, stationSlice } from './slices'

const store = configureStore({
  reducer: {
    clients: clientSlice.reducer,
    service: serviceSlice.reducer,
    station: stationSlice.reducer
  }
})

export default store
