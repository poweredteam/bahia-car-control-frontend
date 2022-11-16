import { api } from '../../../services'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, { rejectWithValue }) => {
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
