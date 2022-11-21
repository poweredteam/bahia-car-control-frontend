import PropTypes from 'prop-types'
import { Container, Divider, HStack } from '@chakra-ui/react'
import { SideBar } from '../SideBar'

export default function Layout({ children }) {
  return (
    <Container
      h="inherit"
      alignSelf="flex-start"
      maxW="container.xl">
      <HStack spacing="4" h="inherit">
        <SideBar />
        <Divider orientation="vertical" />
        <HStack justify={'center'} align={'center'}>
          { children }
        </HStack>
      </HStack>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
