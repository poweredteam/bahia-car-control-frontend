import { createSlice } from '@reduxjs/toolkit'
import { saveState, loadState } from 'utilities/localStorage'
import { forgotPassword, resetPassword, signIn, signUp } from './thunk'

// STATUS (type): idle, success, failed
const initialState = {
  token: loadState('user') | null,
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
      state.token = action.payload.token
      saveState('user', action.payload)
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = {
        type: 'failed',
        msg: action.payload
      }
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = {
        type: 'succces',
        msg: action.payload
      }
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = {
        type: 'failed',
        msg: action.payload
      }
    })
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.status = {
        type: 'success',
        msg: action.payload
      }
    })
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.status = {
        type: 'failed',
        msg: action.payload
      }
    })
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.status = {
        type: 'success',
        msg: action.payload
      }
    })
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.status = {
        type: 'failed',
        msg: action.payload
      }
    })
  }
})

export default authSlice
