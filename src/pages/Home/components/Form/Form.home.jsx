import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Form.home.css'
import { addService } from '../../../../redux/slices/services/serviceSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getStations } from '../../../../redux/slices/station/thunk'
import { getTeches } from '../../../../redux/slices/tech/thunk.js'
import { validateBack } from '../../../../redux/slices/services/thunk'
import {
  Flex,
  Box,
  HStack,
  FormControl,
  Input,
  Button,
  Select
} from '@chakra-ui/react'

function Formcard() {
  useEffect(() => {
    dispatch(getStations())
    dispatch(getTeches())
  }, [])
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  // Get data tech/station/service using useSelector
  const techOptions = useSelector((state) => state.tech.tech)
  const stationOptions = useSelector((state) => state.station.station)
  const serviceRedux = useSelector((state) => state.service.service)
  // Custom notifications
  const notify = () =>
    toast.success('🦄 Servicio creado satisfactoriamente', { autoClose: 3000 })
  const notifyPlacaError = () =>
    toast.error('No se pueden crear dos servicios con la misma placa', {
      autoClose: 3000
    })
  const currentDate = new Date().toLocaleDateString()

  const serviceSubmit = (service) => {
    const { dni, placa, estacion, tecnico } = service
    service = {
      dni,
      placa: placa.toUpperCase(),
      estacion,
      tecnico
    }
    dispatch(validateBack(dni, placa)).then((res) => {
      if (res.client === false && res.licence === false && res.isRelated === false) {
        alert('cliente y placa no existe, por favor crealos y relacionalos')
      }
      if (res.client === true && res.licence === false && res.isRelated === false) {
        alert('cliente  existe pero la placa no existe, por favor crea la placa y relacionala al cliente')
        console.log(res.data)
      }
      if (res.client === false && res.licence === true && res.isRelated === false) {
        alert('cliente no esta creado, pero la placa existe, por favor crea al cliente y relaciona la placa')
      }
      if (res.client === true && res.licence === true && res.isRelated === false) {
        alert('cliente y placa existe, por favor relaciona la placa al cliente')
        console.log(res.data)
      }
      if (res.client === true && res.licence === true && res.isRelated === true) {
        const placaFound = serviceRedux.filter((s) => s.placa === service.placa)
        if (placaFound.length > 0) {
          return notifyPlacaError()
        } else {
          dispatch(addService({ ...service, data: res.data, fecha: currentDate }))
          reset()
          notify()
        }
      }
    })
  }

  return (
    <Box p={5} bg="gray.50">
      <form onSubmit={handleSubmit(serviceSubmit)}>
        <Flex align="center" justify="end">
          <HStack spacing="24px">
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl isRequired>
                <Input
                  type="text"
                  {...register('dni', { required: true, maxLength: 10 })}
                  placeholder="DNI Cliente"
                  width="150px"
                  /* onChange={handleChange} */
                />
              </FormControl>
              {errors.dni?.type === 'required' && (
                <small className="fail">DNI vacío</small>
              )}
              {errors.dni?.type === 'maxLength' && (
                <small className="fail">DNI invalido</small>
              )}
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl isRequired>
                <Input
                  type="text"
                  {...register('placa', { required: true, maxLength: 7 })}
                  placeholder="Placa"
                  width="150px" /* onChange={handleChange} */
                />
              </FormControl>
              {errors.placa?.type === 'required' && (
                <small className="fail">Placa vacía</small>
              )}
              {errors.placa?.type === 'maxLength' && (
                <small className="fail">Placa invalida</small>
              )}
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl>
                <Select
                  {...register('estacion', { required: true })}
                  placeholder="Estación"
                  width="150px">
                  {stationOptions.map((opt) => (
                    <option key={opt._id} value={opt.workStation}>
                      {opt.workStation}
                    </option>
                  ))}
                </Select>
                {errors.station && (
                  <small className="fail">Selecciona una estación</small>
                )}
              </FormControl>
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl>
                <Select
                  {...register('tecnico', { required: true })}
                  placeholder="Tecnico"
                  width="150px">
                  {techOptions.map((option) => (
                    <option key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                {errors.tecnico && (
                  <small className="fail">Selecciona un tecnico</small>
                )}
              </FormControl>
            </Box>
            <Box my={-8} width="150px">
              <FormControl>
                <Button type="submit" colorScheme="orange" width="150px">
                  Iniciar
                </Button>
                <ToastContainer theme="colored" />
              </FormControl>
            </Box>
          </HStack>
        </Flex>
      </form>
    </Box>
  )
}

export default Formcard
