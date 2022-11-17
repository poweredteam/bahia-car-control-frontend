import { HStack, Center, Icon, Heading } from '@chakra-ui/react'
import { FaCar } from 'react-icons/fa'

export default function Logo() {
  return (
    <HStack h="20%" w="full" alignItems="center" justifyContent="center" >
      <Center>
        <Icon as={FaCar} boxSize='35px'/>
      </Center>
      <Heading>Car Bahia</Heading>
    </HStack>
  )
}
