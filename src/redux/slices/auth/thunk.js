import { api } from 'services/api.services'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk(
  'auth/signIn', async (user, { rejectWithValue }) => {
    const { email, password } = user
    try {
      await api.post('/auth/login/', { email, password })
      return 'Se inicio sesión con éxito'
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    const { name, email, password } = user
    try {
      await api.post('/auth/register', { name, email, password })
      return 'Se creo el usuario con éxito'
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      await api.put(
        '/auth/forgot-password/',
        { email }
      )
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'auth/newPassword',
  async (values, { rejectWithValue }) => {
    try {
      const { password, token } = values
      const config = {
        headers: { reset: token }
      }
      await api.put(
        '/auth/new-password/',
        { newPassword: password },
        config
      )
      return 'Contraseña cambiada con éxito'
    } catch (err) {
      console.log(err)
    }
  }
)
