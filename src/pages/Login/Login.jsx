import { Form, ResetPassword } from './components'
import { Flex } from '@chakra-ui/react'

function Login() {
  return (
    <Flex>
      <ResetPassword />
      <Form />
    </Flex>
  )
}

export default Login
