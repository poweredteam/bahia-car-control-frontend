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
    }
  }
})

export const { addService } = serviceSlice.actions
