import { useState, useEffect } from 'react'
import './Form.home.css'
import { addService } from '../../../../redux/slices/services/serviceSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import { getStations } from '../../../../redux/slices/station/thunk.js'
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStations())
  }, [stationOptions])

  const { register, handleSubmit, formState: { errors } } = useForm()
  // Traer las datas de tech y bay con useSelector
  //  const techOptions = useSelector((state) => state.tech)
  const stationOptions = useSelector((state) => state.station.station)

  /*  const techOptions = [
    {
      id: 1,
      value: 'Jhon Doe',
      text: 'Jhon Doe'
    },
    {
      id: 2,
      value: 'Peter Parker',
      text: 'Peter Parker'
    },
    {
      id: 3,
      value: 'James Bond',
      text: 'James Bond'
    }
  ] */

  const serviceSubmit = (service) => {
    console.log('SERVICE', service)
    // Make validations here (DNI && PLACA) update service-state before
    dispatch(addService({
      ...service,
      id: uuid()
    }))
  }
  return (
    <Box p={10}>
      <form onSubmit={handleSubmit(serviceSubmit)}>
        <Flex align="center" justify="end">
          <HStack spacing='24px'>
            <Box border='1px' borderColor='gray.400' borderRadius="md">
              <FormControl isRequired>
                <Input type="text"
                  {...register('dni', { required: true, maxLength: 10 })}
                  placeholder="DNI Cliente"
                  width='150px'
                /* onChange={handleChange} */
                />
              </FormControl>
              {errors.dni?.type === 'required' && <small className='fail'>DNI vacío</small>}
              {errors.dni?.type === 'maxLength' && <small className='fail'>DNI invalido</small>}
            </Box>
            <Box border='1px' borderColor='gray.400' borderRadius="md">
              <FormControl isRequired>
                <Input type="text" {...register('placa', { required: true, maxLength: 7 })} placeholder="Placa" width='150px' /* onChange={handleChange} */ />
              </FormControl>
              {errors.placa?.type === 'required' && <small className='fail'>Placa vacía</small>}
              {errors.placa?.type === 'maxLength' && <small className='fail'>Placa invalida</small>}
            </Box>
            <Box border='1px' borderColor='gray.400' borderRadius="md">
              <FormControl value="Test">
                <Select {...register('station', { required: true })} placeholder='Estación' width='150px'>
                  {
                    stationOptions.map(opt => (
                      <option key={opt._id} value={opt.workStation}>{opt.workStation}</option>
                    ))
                  }
                </Select>
                {errors.station && <small className='fail'>Selecciona una estación</small>}
              </FormControl>
            </Box>
            <Box border='1px' borderColor='gray.400' borderRadius="md">
              <FormControl /* value={techSelected} */>
                <Select {...register('tecnico', { required: true })} placeholder='Tecnico' width='150px'>
{/*                   {
                    techOptions.map(option => (
                      <option key={option.id} value={option.value}>{option.text}</option>
                    ))
                  } */}
                </Select>
                {errors.tecnico && <small className='fail'>Selecciona un tecnico</small>}
              </FormControl>
            </Box>
            <Box my={-8} width="150px">
              <FormControl>
                <Button type="submit" colorScheme='orange' width='150px'>
                  Iniciar
                </Button>
              </FormControl>
            </Box>
          </HStack>
        </Flex>
      </form>
    </Box>
  )
}

export default Formcard
