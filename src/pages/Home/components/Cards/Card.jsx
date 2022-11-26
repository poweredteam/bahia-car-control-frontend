import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useStopwatch } from 'react-timer-hook'
import { Box, Flex, Spacer, Center, Text, Button, Icon, AlertDialog } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { sendService, removeService, addService } from '../../../../redux/slices/services'
import swal from 'sweetalert'
import './Card.css'

function ItemHeader({ text, text2 }) {
  return (
    <Flex
      flex={4}
      direction="column"
      textAlign="center"
      justify="center"
      align="center"
    >
      <Text fontSize="14px" fontWeight="medium" color="brand.dark" width="78px">
        {text}
      </Text>
      <Text
        bg="white"
        borderRadius="5px"
        fontSize="16px"
        fontWeight="semibold"
        color="brand.dark"
        width="78px"
      >
        {text2}
      </Text>
    </Flex>
  )
}
ItemHeader.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
}

function Card({ license, station, date, technician, data }) {
  const dispatch = useDispatch()
  const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false })
  const timer = {
    hours: hours < 10 ? '0' + hours : hours,
    minutes: minutes < 10 ? '0' + minutes : minutes,
    seconds: seconds < 10 ? '0' + seconds : seconds
  }
  localStorage.setItem(`${license}`, `${timer.hours}:${timer.minutes}:${timer.seconds}`)
  const generalInfo = {
    type: 'cambio',
    cronometer: timer,
    datetime: date,
    workstation: station,
    technician: technician,
    kilometers: 'pte',
    goods: [],
    vehicle_id: license,
    driver: 'pte',
    comments: 'pte'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.name === 'end') {
      pause()
      swal({
        title: 'Atención',
        text: '¿Desear finalizar el Servicio?',
        icon: 'warning',
        buttons: {
          Si: true,
          No: true
        }
      }).then((value) => {
        switch (value) {
          case 'Si':
            pause()
            dispatch(sendService(generalInfo))
            dispatch(removeService(license))
            localStorage.removeItem(`${license}`)
            break
          case 'No':
            start()
            break
          default:
            break
        }
      })
    }
    if (e.target.name === 'edit') {
      alert('editar')
    }
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
        <ItemHeader text="PLACA" text2={license} />
        <ItemHeader text="ESTACION" text2={station} />
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
    </Box>
  )
}

export default Card
