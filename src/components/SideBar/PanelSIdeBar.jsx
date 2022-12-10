import {
  Button,
  Icon,
  Avatar,
  VStack,
  HStack,
  Badge,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaUser, FaMoon, FaSun } from 'react-icons/fa'

export default function PanelSideBar({ d }) {
  const { toggleColorMode } = useColorMode()
  const darkLightToggle = useColorModeValue('brand.dark', 'brand.light')
  const lightDarkToggle = useColorModeValue('brand.light', 'brand.dark')
  const icon = useColorModeValue(FaSun, FaMoon)
  const toggleText = {
    open: { x: 0, opacity: 1 },
    closed: { display: 'none', x: 5, opacity: 0 }
  }
  return (
    <VStack
      as={motion.div}
      spacing="8"
      h="20%"
      w="full"
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <HStack justifyContent="space-evenly" w="full">
        <Button
          onClick={toggleColorMode}
          variant="unstyled"
          rounded="full"
          boxSize="25px"
        >
          <Icon as={icon} boxSize="35px" color={lightDarkToggle} />
        </Button>
      </HStack>
      <HStack justifyContent="space-evenly" maxW="80%" alignSelf="center">
        <Avatar
          icon={<FaUser />}
          bg={darkLightToggle}
          color={lightDarkToggle}
        />
        <VStack
          as={motion.div}
          animate={d ? 'open' : 'closed'}
          variants={toggleText}
          spacing="-1.8"
          color={darkLightToggle}
          alignItems="flex-end"
        >
          <Text>name lastname</Text>
          <Text fontSize="sm">
            <Badge
              bg="brand.analogousYellow"
              rounded="full"
              color="brand.dark"
            >
              ADMIN
            </Badge>
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}
