// import React from 'react'
import { Box, Flex, Spacer, Center, Text, Square, Button, ButtonGroup, IconButton, Icon } from '@chakra-ui/react'
import { PlayIcon, PauseIcon } from '../../../.././resource/Svg'
import { FaPause, FaPlay } from 'react-icons/fa'

function Card() {
  const play = false

  return <Box bg='#FFFFFF' w ='100%' maxW= '230px' h='304px' maxH='304px' overflow='hidden' borderRadius='5px'>
    <Flex bg ='#E2E8F0' width='100%' align='center' height='63px'>
      <Flex flex={4} direction='column' justify='center' align ='center' width='78px'>
        <Flex w='78px'direction='column' justify='center' align ='center'>
          <Text fontSize='14px' fontWeight='medium' color='#4A5568'>PLACA</Text>
        </Flex>
        <Flex bg='white' w='78px'direction='column' justify='center' align ='center' borderRadius='5px'>
          <Text fontSize='16px' fontWeight='semibold' color='#4A5568'>AAA111</Text>
        </Flex>
      </Flex>
      <Spacer></Spacer>
      <Flex flex={4} direction='column' justify='center' align ='center' width='78px'>
        <Flex w='78px'direction='column' justify='center' align ='center'>
          <Text fontSize='14px' fontWeight='medium' color='#4A5568'>ESTACION</Text>
        </Flex>
        <Flex bg='white' w='78px'direction='column' justify='center' align ='center' borderRadius='5px'>
          <Text fontSize='16px' fontWeight='semibold' color='#4A5568'>2</Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex direction='column' justify='center' align='center'>
      <Flex>
        <Text fontSize='36px' fontWeight='medium' color='#4A5568'>00:22:03</Text>
      </Flex>
      <Flex h='110px'>
        <Button bg='#F49237' borderRadius='100px' h='100px' w='100px'>
          <Center color ='#F9FAFD'>
            {
              <span width='80px'>{ play ? <FaPlay width={60}/> : <FaPause/>}</span>
            }
            {/* <Icon as={play ? FaPlay : FaPause} w='60px' h='60px' fill='#F9FAFD'/> */}
          </Center>
        </Button>
      </Flex>
      <Flex width='191px' h='70px' direction='column' justify='center' align='center' paddingBottom='3px'>
        <Button bg='#DD6B20' color='#F9FAFD' width='191px' height='30px'>FINALIZAR</Button>
        <Spacer/>
        <Button bg='#F9FAFD' color='#4A5568' width='191px' height='30px'>EDITAR SERVICIO</Button>
      </Flex>
    </Flex>
  </Box>
}

export default Card
