import { configureStore } from '@reduxjs/toolkit'
import { clientSlice, serviceSlice, stationSlice } from './slices'
import { techSlice } from './slices/tech'

const store = configureStore({
  reducer: {
    clients: clientSlice.reducer,
    service: serviceSlice.reducer,
    station: stationSlice.reducer,
    tech: techSlice.reducer
  }
})

export default store
