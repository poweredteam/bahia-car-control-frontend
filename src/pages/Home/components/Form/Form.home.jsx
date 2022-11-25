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
    dispatch(validateBack(dni, placa)).then((res) => { console.log(res) 
    })
    //   if (res.client & res.license && res.isRelated) {
    //     const placaFound = serviceRedux.filter((s) => s.placa === service.placa)
    //     if (placaFound.length > 0) {
    //       return notifyPlacaError()
    //     } else {
    //       dispatch(addService({ ...service, fecha: currentDate }))
    //       reset()
    //       notify()
    //     }
    //   }
    // })
  }

  // if (res.client & !res.license && !res.isRelated) {
  //   console.log(res)
  //   return alert('la placa no existe, creala y relacionala al cliente')
  // }
  // if (!res.client & res.license && !res.isRelated) {
  //   console.log(res)
  //   return alert('el licente no existe, crealo y relacionalo a la placa')
  // }
  // if (res.client & res.license && !res.isRelated) {
  //   console.log(res)
  //   return alert(
  //     'el cliente existe y la placa existe, pero no esta relacionado, relacionalo'
  //   )
  // }
  // if (!res.client & !res.license && !res.isRelated) {
  //   alert('cliente y placa no existe, crea cliente y placa y relacionalo')
  // }
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
