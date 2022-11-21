import { VStack, HStack } from '@chakra-ui/react'

import Sections from './SectionsSideBar'
import Logo from './Logo'
import PanelSidebar from './PanelSidebar'

function SideBar() {
  return (
    <VStack
      spacing="6"
      w="19rem"
      h="inherit"
      bg="brand.sec"
      color="brand.light"
      fontSize="2xl">
      <Logo />
      <Sections />

      <PanelSidebar />
    </VStack>
  )
}

export default SideBar
