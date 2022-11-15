import { Link as WouterLink } from 'wouter'
import { VStack, HStack, Center, Text, Icon, Link } from '@chakra-ui/react'

import { SECTIONS } from '../../utilities/constans'

export default function SideBar() {
  return (
    <VStack spacing="6" w="20rem" h="inherit">
      <HStack>
        <Center>
          <Icon src={'../'} alt="" />
        </Center>
        <Text>Car Bahia</Text>
      </HStack>
      {SECTIONS.map((s) => {
        const { title, href, inactiveIcon } = s
        return (
          <Link key={title} as={WouterLink} href={href}>
            <HStack w="full">
              <Icon as={inactiveIcon} />
              <Text>{title}</Text>
            </HStack>
          </Link>
        )
      })}
    </VStack>
  )
}
