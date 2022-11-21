import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'

import { useDispatch } from 'react-redux'
import { signUp } from 'redux/slices/auth/thunk'
import { createUserAdapter } from 'adapters'

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function Form() {
  const [values, setValues] = useState(initialState)
  const [isWrong, setIsWrong] = useState(false)
  const dispatch = useDispatch()

  const { username, email, password, confirmPassword } = values

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (confirmPassword !== password) {
      return setIsWrong(true)
    }
    dispatch(signUp(createUserAdapter(values)))
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Nombre de usuario</FormLabel>
        <Input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
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
      </FormControl>
      <FormControl isRequired isInvalid={isWrong}>
        <FormLabel>Confirmar contraseña</FormLabel>
        <Input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        {isWrong &&
          <FormErrorMessage>Las contraseñas no coinciden</FormErrorMessage>
        }
      </FormControl>
      <Button
        type='submit'
        colorScheme='blue'
      >Registrar</Button>
    </form>
  )
}

export default Form
