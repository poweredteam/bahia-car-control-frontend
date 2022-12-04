import { createSlice } from '@reduxjs/toolkit'
import { saveState } from 'utilities/localStorage'
import { forgotPassword, signIn } from './thunk'

// STATUS (type): idle, success, failed
const initialState = {
  status: {
    type: 'idle',
    msg: ''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = {
        type: 'succces',
        msg: 'Sesión iniciada con éxito'
      }
      saveState('user', action.payload)
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = {
        type: 'failed',
        msg: ''
      }
    })
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.status = {
        type: 'success',
        msg: ''
      }
    })
    builder.addCase(forgotPassword.rejected, (state, action) => {
      console.log(action.payload)
    })
  }
})

export default authSlice
