// import { api } from '../../../services'
import { api } from '../../../services/api.services'
import { getStation } from './stationSlice'

export const getStations = () => {
  return async (dispatch) => {
    const { data } = await api.get('/station')
    console.log(data)
    dispatch(getStation(data))
  }
}
