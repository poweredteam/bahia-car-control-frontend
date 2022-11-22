import { useState } from 'react'
import './Form.home.css'
import { addService } from '../../../../redux/slices/services/serviceSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
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
  const { register, handleSubmit, formState: { errors } } = useForm()
  // Traer las datas de tech y bay con useSelector
  //  const techOptions = useSelector((state) => state.tech)
  //  const bayOptions = useSelector((state) => state.bay)
  const techOptions = [
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
  ]

  const bayOptions = [
    {
      value: '1',
      text: '1'
    },
    {
      value: '2',
      text: '2'
    },
    {
      value: '3',
      text: '3'
    }
  ]

  /* const [service, setService] = useState({
    dni: '',
    placa: '',
    bahia: '',
    tecnico: ''
  }) */

  const [baySelected, setBaySelected] = useState(bayOptions[0].value)
  const [techSelected, setTechSelected] = useState(techOptions[0].value)
  const dispatch = useDispatch()

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
              <FormControl value={baySelected}>
                <Select {...register('bahia', { required: true })} placeholder='Bahía' width='150px'>
                  {
                    bayOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.text}</option>
                    ))
                  }
                </Select>
                {errors.bahia && <small className='fail'>Selecciona una bahía</small>}
              </FormControl>
            </Box>
            <Box border='1px' borderColor='gray.400' borderRadius="md">
              <FormControl value={techSelected}>
                <Select {...register('tecnico', { required: true })} placeholder='Tecnico' width='150px'>
                  {
                    techOptions.map(option => (
                      <option key={option.id} value={option.value}>{option.text}</option>
                    ))
                  }
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
