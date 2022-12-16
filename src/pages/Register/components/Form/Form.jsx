import React, { useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

import { useDispatch } from 'react-redux'
import { signUp } from 'redux/slices/auth/thunk'
import { createUserAdapter } from 'adapters'

const initialState = {
  username: '',
  email: '',
  password: ''
}

function Form() {
  const [values, setValues] = useState(initialState)
  const [isWrong, setIsWrong] = useState(false)
  const dispatch = useDispatch()

  const { username, email, password } = values

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signUp(createUserAdapter(values)))
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Flex direction="column" mt="5" gap="4">
        <FormControl isRequired>
          <FormLabel>Nombre de usuario</FormLabel>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Correo electronico</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" mt="4" colorScheme="orange">
          Crear cuenta
        </Button>
      </Flex>
    </form>
  )
}

export default Form
