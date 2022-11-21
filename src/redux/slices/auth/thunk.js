import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk(
  'auth/signIn', async (user, { rejectWithValue }) => {
    const { email, password } = user
    try {
      const { data } = await axios.post(
        'http://localhost:8080/auth/login/',
        { email, password }
      )
      return data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    const { name, email, password } = user
    console.log(user)
    try {
      await axios.post(
        'http://localhost:8080/auth/register/',
        { name, email, password }
      )
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      await axios.put(
        'http://localhost:8080/auth/forgot-password/',
        { email }
      )
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data)
    }
  }
)
