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
  // Date & time
  const currentDate = new Date().toLocaleDateString()
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  // Create service
  const serviceSubmit = (service) => {
    const { clientId, vehicle_id, workstation, technician } = service
    service = {
      clientId,
      vehicle_id: vehicle_id.toUpperCase(),
      workstation,
      technician
    }
    dispatch(validateBack(clientId, vehicle_id)).then((res) => {
      if (res.client === false && res.licence === false && res.isRelated === false) {
        alert('cliente y placa no existe, por favor crealos y relacionalos')
      }
      if (res.client === true && res.licence === false && res.isRelated === false) {
        alert('cliente  existe pero la placa no existe, por favor crea la placa y relacionala al cliente')
      }
      if (res.client === false && res.licence === true && res.isRelated === false) {
        alert('cliente no esta creado, pero la placa existe, por favor crea al cliente y relaciona la placa')
      }
      if (res.client === true && res.licence === true && res.isRelated === false) {
        alert('cliente y placa existe, por favor relaciona la placa al cliente')
      }
      if (res.client === true && res.licence === true && res.isRelated === true) {
        const placaFound = serviceRedux.filter((s) => s.vehicle_id === service.vehicle_id)
        if (placaFound.length > 0) {
          return notifyPlacaError()
        } else {
          dispatch(addService({
            ...service,
            data: res.data,
            type: '',
            timer: null,
            datetime: `${currentDate} ${currentTime}`,
            kilometers: '',
            goods: [],
            driver: '',
            comments: ''
          }))
          reset()
          notify()
        }
      }
    })
  }
  return (
    <Box p={5} bg="gray.100" mt="5" h='90px' w='1041px' shadow='md' borderWidth='1px' borderRadius="md">
      <form onSubmit={handleSubmit(serviceSubmit)}>
        <Flex align="center" justify="center">
          <HStack spacing="24px">
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl isRequired>
                <Input
                  type="text"
                  {...register('clientId', { required: true, maxLength: 10 })}
                  placeholder="DNI Cliente"
                  width="200px"
                />
              </FormControl>
              {errors.clientId?.type === 'required' && (
                <small className="fail">DNI vacío</small>
              )}
              {errors.clientId?.type === 'maxLength' && (
                <small className="fail">DNI invalido</small>
              )}
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl isRequired>
                <Input
                  type="text"
                  {...register('vehicle_id', { required: true, maxLength: 7 })}
                  placeholder="Placa"
                  width="150px"
                />
              </FormControl>
              {errors.vehicle_id?.type === 'required' && (
                <small className="fail">Placa vacía</small>
              )}
              {errors.vehicle_id?.type === 'maxLength' && (
                <small className="fail">Placa invalida</small>
              )}
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl style={{ color: 'black' }}>
                <Select
                  {...register('workstation', { required: true })}
                  placeholder="Estación"
                  width="150px">
                  {stationOptions.map((opt) => (
                    <option key={opt._id} value={opt.workStation}>
                      {opt.workStation}
                    </option>
                  ))}
                </Select>
                {errors.workstation?.type === 'required' && (
                  <small className="fail">Selecciona una estación</small>
                )}
              </FormControl>
            </Box>
            <Box border="1px" borderColor="gray.400" borderRadius="md">
              <FormControl style={{ color: 'black' }}>
                <Select
                  {...register('technician', { required: true })}
                  placeholder="Tecnico"
                  width="200px">
                  {techOptions.map((option) => (
                    <option key={option._id} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                {errors.technician?.type === 'required' && (
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
