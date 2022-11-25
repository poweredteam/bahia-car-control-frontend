import {
  Button,
  Icon,
  Avatar,
  HStack,
  Text,
  Stack,
  useColorMode,
  useColorModeValue,
  Circle,
  Center
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaUser, FaMoon, FaSun } from 'react-icons/fa'

export default function PanelSideBar({ d }) {
  const { toggleColorMode } = useColorMode()
  const primaryVariantToggle = useColorModeValue(
    'brand.primaryDarkVariant',
    'brand.primaryLightVariant'
  )
  const darkLightToggle = useColorModeValue('brand.dark', 'brand.light')
  const icon = useColorModeValue(FaMoon, FaSun)
  const toggleShadow = useColorModeValue('inner', '2xl')
  return (
    <Stack
      as={motion.div}
      direction={d ? 'row' : 'column'}
      h={d ? '10%' : '25%'}
      p="4"
      w="inherit"
      spacing="2"
      alignItems="center"
      justifyContent="space-around"
      boxShadow="base"
      transition=".2s linear"
      delay="1">
      <HStack display="inline-flex">
        <Avatar
          icon={<FaUser />}
          bg={primaryVariantToggle}
          boxShadow={toggleShadow}
        />
        {d ? (
          <Text color={darkLightToggle} fontSize="1rem">
            user name
          </Text>
        ) : null}
      </HStack>
      <Button
        onClick={toggleColorMode}
        variant="unstyled"
        rounded="full"
        boxSize="50px">
        <Center>
          <Circle boxShadow="inner" boxSize="3rem">
            <Icon as={icon} boxSize="40px" color={primaryVariantToggle} />
          </Circle>
        </Center>
      </Button>
    </Stack>
  )
}
