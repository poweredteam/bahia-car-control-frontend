import { configureStore } from '@reduxjs/toolkit'
import { clientSlice, serviceSlice, stationSlice, productSlice } from './index'
import { techSlice } from './slices/tech'

const store = configureStore({
  reducer: {
    clients: clientSlice.reducer,
    service: serviceSlice.reducer,
    station: stationSlice.reducer,
    tech: techSlice.reducer,
    products: productSlice.reducer
  }
})

export default store
