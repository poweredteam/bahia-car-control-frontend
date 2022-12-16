import { configureStore } from '@reduxjs/toolkit'
import {
  textSlice,
  authSlice,
  clientSlice,
  serviceSlice,
  stationSlice,
  productSlice,
  techSlice
} from './slices'

const store = configureStore({
  reducer: {
    text: textSlice.reducer,
    auth: authSlice.reducer,
    clients: clientSlice.reducer,
    service: serviceSlice.reducer,
    station: stationSlice.reducer,
    tech: techSlice.reducer,
    products: productSlice.reducer
  }
})

export default store
