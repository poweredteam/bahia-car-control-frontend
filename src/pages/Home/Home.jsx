import { Flex, Container } from '@chakra-ui/react'
import { Cards } from './components'
import Formcard from './components/Form/Form.home'
import './home.css'

function Home() {
  return (
    <Container
      h="inherit"
      alignSelf="flex-start"
      maxW="container.xl">
      <Flex flexWrap="wrap">
        <Formcard />
        <Cards />
      </Flex>
    </Container>
  )
}

export default Home
