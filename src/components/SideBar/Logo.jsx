import { HStack, Center, Text, Icon } from '@chakra-ui/react'

export default function Logo() {
  return (
    <HStack h="20%" w="full" border="1px">
      <Center>
        <Icon src={'../'} alt="" />
      </Center>
      <Text>Car Bahia</Text>
    </HStack>
  )
}
