import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { VStack, useBoolean, Button, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Sections from './SectionsSideBar'
import Logo from './Logo'
import PanelSideBar from './PanelSIdeBar'

export default function SideBar({ parentD }) {
  const [flag, setFlag] = useBoolean()
  const toggleMenu = {
    open: { width: '19rem' },
    closed: { width: '4rem' }
  }
  parentD(flag)

  return (
    <>
      <VStack
        as={motion.div}
        spacing="6"
        h="inherit"
        py="2rem"
        bg="brand.sec"
        fontSize="lg"
        animate={flag ? 'open' : 'closed'}
        variants={toggleMenu}
      >
        <Box w="full" h="3.5rem" position="relative">
          <Button
            onClick={setFlag.toggle}
            position="absolute"
            variant="unstyled"
            right="0"
          >
            {flag ? <FaArrowLeft /> : <FaArrowRight />}
          </Button>
        </Box>
        <Logo d={flag} />
        <Sections d={flag} />
        <PanelSideBar d={flag} />
      </VStack>
    </>
  )
}
