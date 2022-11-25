import { HStack, Center, Icon, Heading } from '@chakra-ui/react'
import { FaCar } from 'react-icons/fa'

export default function Logo({ d }) {
  return (
    <HStack h="20%" w="full" alignItems="center" justifyContent="center" display='inline-flex'>
      {d ? (
        <>
          <Center>
            <Icon as={FaCar} boxSize="35px" />
          </Center>
          <Heading>Car Bahia</Heading>
        </>
      ) : (
        <Center>
          <Icon as={FaCar} boxSize="25px" />
        </Center>
      )}
    </HStack>
  )
}
