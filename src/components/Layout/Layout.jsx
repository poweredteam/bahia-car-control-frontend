import { Container, Divider, HStack } from '@chakra-ui/react'

import SideBar from 'components/SideBar/SideBar'

export default function Layout({ children }) {
  return (
    <Container
      h="100vh"
      alignSelf="flex-start"
      maxW="container.xl"
      border="1px">
      <HStack spacing="4" h="inherit">
        <SideBar />
        <Divider orientation="vertical" />
        <HStack justify={'center'} align={'center'}>
          {children}
        </HStack>
      </HStack>
    </Container>
  )
}
