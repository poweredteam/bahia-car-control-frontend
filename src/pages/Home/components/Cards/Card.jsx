import PropTypes from 'prop-types'
import { Box, Flex, Spacer, Center, Text, Button, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import './Card.css'

function ItemHeader({ text, text2 }) {
  return (
    <Flex flex={4} direction='column' textAlign='center' justify='center' align ='center'>
      <Text fontSize='14px' fontWeight='medium' color='brand.dark' width='78px'>{text}</Text>
      <Text bg='white' borderRadius='5px' fontSize='16px' fontWeight='semibold' color='brand.dark' width='78px'>{text2}</Text>
    </Flex>
  )
}
ItemHeader.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
}

function Card() {
  const [play, setPlay] = useState(true)

  return (
    <Box bg='white' w ='100%' maxW= '230px' minW='220px' h='304px' maxH='400px' boxShadow='0px 0px 10px -2px' borderRadius='5px' >
      <Flex bg='brand.greyLight' width='100%' align='center' height='63px'>
        <ItemHeader text='PLACA' text2='AAA111'/>
        <ItemHeader text='ESTACION' text2='2'/>
      </Flex>
      <Flex direction='column' justify='center' align='center'>
        <Text fontSize='36px' fontWeight='medium' color='brand.dark'>00:22:03</Text>
        <Box h='110px' color='white'>
          <Button bg='brand.sec' borderRadius='100px' h='100px' w='100px'>
            { play ? <Icon as = {FaPlay} w='60px' h='60px' />
              : <Icon as = {FaPause} w='60px' h='60px' />
            }
          </Button>
        </Box>
        <Flex maxWidth='191px' h='70px' direction='column' gap='10px' justify='center' align='center' paddingBottom='3px'>
          <Button bg='brand.sec' color='white' width='191px' height='30px' onClick={() => setPlay(false)}>FINALIZAR</Button>
          <Button bg='brand.greyLight' color='brand.dark' width='191px' height='30px' onClick={() => setPlay(true)}>EDITAR SERVICIO</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Card
