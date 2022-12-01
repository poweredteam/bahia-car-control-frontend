import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  service: []
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addService: (state, action) => {
      state.service = [...state.service, action.payload]
    },
    removeService: (state, action) => {
      state.service = state.service.filter(s => s.placa !== action.payload)
    },
    updateService: (state, action) => {
      // const serviceFound = state.service.filter(s => s.placa === action.payload.id)
      console.log(action.payload)
      console.log(action.payload.license)
      console.log(action.payload.driver)
      const index = state.service.findIndex(obj => {
        return obj.placa === action.payload.license
      })
      state.service[index] = action.payload
    }
  }
})

export const { addService, removeService, updateService } = serviceSlice.actions
