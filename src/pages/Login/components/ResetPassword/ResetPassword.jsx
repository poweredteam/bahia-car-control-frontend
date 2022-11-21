import { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { forgotPassword } from 'redux/slices'

function ResetPassword() {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(forgotPassword(email))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Correo electronico</FormLabel>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Button
          type='submit'
          colorScheme='blue'
        >Resetear contraseña</Button>
      </FormControl>
      </form>
    </div>
  )
}

export default ResetPassword
