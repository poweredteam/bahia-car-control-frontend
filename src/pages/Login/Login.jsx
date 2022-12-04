import { Form } from './components'
import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'

function Login() {
  return (
    <Flex
      direction="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center">
      <Box
        display="flex"
        gap='4'
        maxW='sm'
        flexDir="column"
        width="full"
        mb="2"
        p='10'
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
      >
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Heading as='h1' size='lg' fontFamily='serif'>¡Bienvenido!</Heading>
        <Form />
      </Box>
    </Flex>
  )
}

export default Login
