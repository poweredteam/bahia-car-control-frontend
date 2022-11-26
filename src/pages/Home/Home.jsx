import { useState } from 'react'
import { Stack, Flex, Container } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards, Card } from './components'
import Formcard from './components/Form/Form.home'
import { getClients } from '../../redux/slices/clients'
import './home.css'

function Home() {
  const dispatch = useDispatch()
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
