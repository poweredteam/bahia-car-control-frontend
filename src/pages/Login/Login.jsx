import { Form } from './components'
import { Avatar, Box, Center, Flex, Heading, Icon } from '@chakra-ui/react'
import { GiKiwiBird } from 'react-icons/gi'

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

          <Icon as={GiKiwiBird} boxSize="35px" />
        <Heading as='h1' size='lg' fontFamily='serif'>¡Bienvenido!</Heading>
        <Form />
      </Box>
    </Flex>
  )
}

export default Login
