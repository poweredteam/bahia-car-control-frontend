import axios from 'axios'
// const { REACT_APP_API } = process.env

export const api = axios.create({
  baseURL: 'https://oyster-app-4d968.ondigitalocean.app/'
})
