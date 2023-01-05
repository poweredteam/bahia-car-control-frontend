import { useEffect, useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  useDisclosure
} from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import { signIn } from 'redux/slices/auth/thunk'
import { createUserAdapter } from 'adapters'
import { Modal } from 'components/Modal'
import { ResetPassword } from '../../components'
import { useNavigate } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

function Form() {
  const [values, setValues] = useState(initialState)
  const [isWrong, setIsWrong] = useState(false)
  const status = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (status === 'failed') setIsWrong(true)
    if (status === 'success') {
      // navigate('/')
    }
  }, [status])

  const { email, password } = values

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
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Flex direction='column' mt='5' gap='4'>
          <FormControl isRequired isInvalid={isWrong}>
            <FormLabel>Correo electronico</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired isInvalid={isWrong}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {isWrong && <FormErrorMessage>El correo o contraseña son erroneos</FormErrorMessage>}
            <FormHelperText textAlign="right">
              <Link color="orange" onClick={onOpen} >
                ¿Olvidaste tu contraseña?
              </Link>
            </FormHelperText>
          </FormControl>
          <Button type="submit" mt='4' colorScheme='orange'>
            Iniciar Sesión
          </Button>
        </Flex>
      </form>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ResetPassword />
      </Modal>
    </>
  )
}

export default Form
