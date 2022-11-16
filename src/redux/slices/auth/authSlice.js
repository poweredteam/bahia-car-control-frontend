import { createSlice } from '@reduxjs/toolkit'
import { saveState } from 'utilities/localStorage'
import { signIn } from './thunk'

const initialState = {
  message: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.message = {
        type: 'succces',
        msg: 'Sesión iniciada con éxito'
      }
      saveState('user', action.payload)
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.message = {
        type: 'error',
        msg: action.payload
      }
    })
  }
})

// export const { changeText } = textSlice.actions

export default authSlice
