import { Container, Box, HStack, Stack, Flex } from '@chakra-ui/react'
import Card from './Card'

function Cards() {
  return (
    <Box bg='#F9FAFD' w='908px' h='800px' padding={4}>
      <Stack direction={['column', 'row']} justifyContent='space-between' wrap='wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Stack>
    </Box>
  )
}

export default Cards
