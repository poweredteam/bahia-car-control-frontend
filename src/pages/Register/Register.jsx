import { Box, Flex, Heading } from '@chakra-ui/react'
import { Form } from './components'

function Register() {
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
        gap="4"
        maxW="sm"
        flexDir="column"
        width="full"
        mb="2"
        p="10"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white">
        <Heading as='h1' size='lg' fontFamily='serif'>Crea una cuenta</Heading>
        <Form />
      </Box>
    </Flex>
  )
}

export default Register
