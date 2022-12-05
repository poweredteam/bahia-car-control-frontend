import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useStopwatch } from 'react-timer-hook'
import { Box, Flex, Spacer, Center, Text, Button, Icon, AlertDialog, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { sendService, removeService, addService } from '../../../../redux/slices/services'
import swal from 'sweetalert'
import './Card.css'
import { EditFinish } from '../EditFinish'

function ItemHeader({ text, text2 }) {
  return (
    <Flex flex={4} direction="column" textAlign="center" justify="center" align="center">
      <Text fontSize="14px" fontWeight="medium" color="brand.dark" width="78px">
        {text}
      </Text>
      <Text bg="white" borderRadius="5px" fontSize="16px" fontWeight="semibold" color="brand.dark" width="78px">
        {text2}
      </Text>
    </Flex>
  )
}
ItemHeader.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
}

function Card({ vehicle_id, workstation }) {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [estado, setEstado] = useState('')
  const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false })
  const timer = {
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds
  }
  localStorage.setItem(`${vehicle_id}`, `${timer.hours}:${timer.minutes}:${timer.seconds}`)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEstado(e.target.name)
    if (e.target.name === 'end') {
      pause()
    }
    onOpen()
  }
  return (
    <Box
      bg="white"
      w="100%"
      maxW="230px"
      minW="220px"
      h="304px"
      maxH="400px"
      boxShadow="0px 0px 10px -2px"
      borderRadius="5px"
      margin="10px 15px 10px 15px"
    >
      <Flex bg="brand.greyLight" width="100%" align="center" height="63px">
        <ItemHeader text="PLACA" text2={vehicle_id} />
        <ItemHeader text="ESTACION" text2={workstation} />
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize="36px"
          fontWeight="medium"
          color="brand.dark"
          name="time"
        >
          {`${timer.hours}:${timer.minutes}:${timer.seconds}`}
        </Text>
        <Box h="110px" color="white">
          <Button
            bg="brand.sec"
            borderRadius="100px"
            h="100px"
            w="100px"
            onClick={isRunning ? pause : start}
          >
            {!isRunning ? (
              <Icon as={FaPlay} w="60px" h="60px" />
            ) : (
              <Icon as={FaPause} w="60px" h="60px" />
            )}
          </Button>
        </Box>
        <Flex
          maxWidth="191px"
          h="70px"
          direction="column"
          gap="10px"
          justify="center"
          align="center"
          paddingBottom="3px"
        >
          <Button
            bg="brand.sec"
            color="white"
            width="191px"
            height="30px"
            name="end"
            onClick={(e) => handleSubmit(e)}
          >
            FINALIZAR
          </Button>
          <Button
            bg="brand.greyLight"
            color="brand.dark"
            width="191px"
            height="30px"
            name="edit"
            onClick={(e) => handleSubmit(e)}
          >
            EDITAR SERVICIO
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} width='fit-content' >
          <ModalOverlay />
          <ModalContent maxWidth={'none'} width={'fit-content'}>
            <EditFinish
              onClose={onClose}
              estado={estado === 'end' ? 'Finalizar' : 'Editar'}
              vehicle_id={vehicle_id}
              timer={timer}/>
          </ModalContent>
        </Modal>
    </Box>
  )
}

export default Card
