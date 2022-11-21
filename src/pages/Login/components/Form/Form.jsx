import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { signIn } from 'redux/slices/auth/thunk'
import { createUserAdapter } from 'adapters'
import { Modal } from 'components/Modal'

const initialState = {
  email: '',
  password: ''
}

function Form() {
  const [values, setValues] = useState(initialState)
  const { msg, type } = useSelector((state) => state.auth.message)
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { email, password } = values
  const isWrong = type === 'error'

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signIn(createUserAdapter(values)))
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <FormControl isRequired isInvalid={isWrong}>
        <FormLabel>Correo electronico</FormLabel>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired isInvalid={isWrong}>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        {isWrong &&
          <FormErrorMessage>{ msg }</FormErrorMessage>
        }
        <Button colorScheme='teal' variant='link' onClick={onOpen}>
          ¿Olvidaste tu contraseña?
        </Button>
      </FormControl>
      <Button
        type='submit'
        colorScheme='blue'
      >Iniciar Sesión</Button>
    </form>
    <Modal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Form
