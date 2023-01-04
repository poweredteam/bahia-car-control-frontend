import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {
  authSlice,
  clientSlice,
  serviceSlice,
  stationSlice,
  productSlice,
  techSlice
} from './slices'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  service: serviceSlice.reducer,
  auth: authSlice.reducer,
  clients: clientSlice.reducer,
  station: stationSlice.reducer,
  tech: techSlice.reducer,
  products: productSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
})

export default store
