import { api } from '../../../services'

export const validateBack = (id, placa) => {
  return async (dispatch) => {
    const { data } = await api.post('/clientsandlicenses/', { identification: id, license_plate: placa })
    return data
  }
}
