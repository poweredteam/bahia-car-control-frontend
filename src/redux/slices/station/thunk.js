import { api } from '../../../services'
import { getStation } from './stationSlice'

export const getStations = () => {
  return async (dispatch) => {
    const { data } = await api.get('station')
    dispatch(getStation(data))
  }
}
