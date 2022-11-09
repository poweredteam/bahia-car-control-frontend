import { Container, Box, HStack, Stack, Flex } from '@chakra-ui/react'
import Card from './Card'

function Cards() {
  return (
    <Box bg='#F9FAFD' w='908px' h='800px' padding={4}>
      <Flex gap='20px' justifyContent='space-between' wrap='wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Flex>
    </Box>
  )
}

export default Cards
