import { FaBug } from 'react-icons/fa'
import { VStack, useBoolean, IconButton } from '@chakra-ui/react'

import Sections from './SectionsSideBar'
import Logo from './Logo'
import PanelSideBar from './PanelSIdeBar'
import { motion } from 'framer-motion'

export default function SideBar() {
  const [flag, setFlag] = useBoolean()
  return (
    <>
      <VStack
      as={motion.div}
        spacing="6"
        w={flag ? '19rem' : '3rem'}
        h="inherit"
        bg="brand.sec"
        fontSize="2xl"
        transition='0.2s linear'>
        <IconButton icon={<FaBug />} onClick={setFlag.toggle} />
        <Logo />
        <Sections />
        <PanelSideBar d={flag} />
      </VStack>
    </>
  )
}
