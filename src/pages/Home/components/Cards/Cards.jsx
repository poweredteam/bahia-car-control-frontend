import { Container, Box, HStack, Stack, Flex } from '@chakra-ui/react'
import Card from './Card'

function Cards() {
  return (
    <Box bg='#F9FAFD' w='908px' h='800px' display='flex' justifyContent='center' position='relative' alignItems='flex-start' >
      <Flex gap='35px' top='15px' justifyContent='flex-start' wrap='wrap' position='relative' w='800px' paddingStart={3}>
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
