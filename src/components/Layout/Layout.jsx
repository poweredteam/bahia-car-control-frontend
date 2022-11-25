import { Container, HStack } from '@chakra-ui/react'

import SideBar from 'components/SideBar/SideBar'

export default function Layout({ children }) {
  return (
    <Container h="inherit" alignSelf="flex-start" maxW="container.xl">
      <HStack spacing="4" h="inherit">
        <SideBar />
        <HStack justify={'center'} align={'center'}>
          { children }
        </HStack>
      </HStack>
    </Container>
  )
}
