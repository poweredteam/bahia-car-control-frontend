// import React from 'react'
import { Box, Flex, Spacer, Center, Text, Button, Icon, HStack, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import './Card.css'

function Card() {
  const [play, setPlay] = useState(true)

  return (
  <div>
    <Box bg='white' w ='100%' maxW= '230px' minW='220px' h='304px' maxH='400px' overflow='hidden' boxShadow='0px 0px 10px -2px' borderRadius='5px' >
      <Flex bg ='brand.greyLight' width='100%' align='center' height='63px'>
        <Stack flex={4} direction={['column', 'row']} justify='center' align ='center' width='78px'>
          {/* <Flex w='78px'direction='column' justify='center' align ='center'> */}
            <Text fontSize='14px' fontWeight='medium' color='brand.dark'>PLACA</Text>
          {/* </Flex> */}
          {/* <Flex bg='white' w='78px'direction='column' justify='center' align ='center' borderRadius='5px'> */}
            <Text bg='white' borderRadius='5px' fontSize='16px' fontWeight='semibold' color='brand.dark'>AAA111</Text>
          {/* </Flex> */}
        </Stack>
        <Spacer></Spacer>
        <Flex flex={4} direction='column' justify='center' align ='center' width='78px'>
          <Flex w='78px'direction='column' justify='center' align ='center'>
            <Text fontSize='14px' fontWeight='medium' color='brand.dark'>ESTACION</Text>
          </Flex>
          <Flex bg='white' w='78px'direction='column' justify='center' align ='center' borderRadius='5px'>
            <Text fontSize='16px' fontWeight='semibold' color='brand.dark'>2</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction='column' justify='center' align='center'>
        <Flex>
          <Text fontSize='36px' fontWeight='medium' color='brand.dark'>00:22:03</Text>
        </Flex>
        <Flex h='110px'>
          <Button bg='brand.sec' borderRadius='100px' h='100px' w='100px'>
            {play ? <Center color ='white' w='100px' justifyContent='flex-end'>
                  <Icon as = {FaPlay} w='60px' h='60px' />
                </Center>
              : <Center color ='white' w='100px' justifyContent='center'>
                  <Icon as = {FaPause} w='60px' h='60px' />
                </Center>
            }
          </Button>
        </Flex>
        <Flex width='191px' h='70px' direction='column' justify='center' align='center' paddingBottom='3px'>
          <Button bg='brand.sec' color='white' width='191px' height='30px' onClick={() => setPlay(false)}>FINALIZAR</Button>
          <Spacer/>
          <Button bg='brand.greyLight' color='brand.dark' width='191px' height='30px' onClick={() => setPlay(true)}>EDITAR SERVICIO</Button>
        </Flex>
      </Flex>
    </Box>
  </div>
  )
}

export default Card
