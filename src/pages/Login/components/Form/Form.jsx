import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { signIn } from 'redux/slices/auth/thunk'

const initialState = {
  email: '',
  password: ''
}

function Form() {
  const [values, setValues] = useState(initialState)
  const [isWrong, setIsWrong] = useState(false)
  const dispatch = useDispatch()

  const { email, password } = values

  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signIn(values))
  }

  return (
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
        {!isWrong &&
          <FormErrorMessage>El correo o la contraseña no son correctas</FormErrorMessage>
        }
      </FormControl>
      <Button
        type='submit'
        colorScheme='blue'
      >Iniciar Sesión</Button>
    </form>
  )
}

export default Form
