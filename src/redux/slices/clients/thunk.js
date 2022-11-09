import { api } from '../../../services'
import { getClient } from './clientSlice'

export const getClients = () => {
  return async (dispatch) => {
    const { data } = await api.get('client')
    dispatch(getClient({ client: data }))
  }
}
