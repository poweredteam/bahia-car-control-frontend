import {
  Button,
  Center,
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'

export default function PanelSidebar() {
  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue('brand.dark', 'brand.light')
  return (
    <Center h="10%" w="full" border="1px">
      <Button
        onClick={toggleColorMode}
        variant="unstyled"
        rounded="full"
        boxSize="50px">
        <Icon as={FaMoon} boxSize="25px" color={color} />
      </Button>
    </Center>
  )
}
