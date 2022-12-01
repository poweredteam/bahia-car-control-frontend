import { useState } from 'react'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import SideBar from 'components/SideBar/SideBar'

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  function parentD(d) {
    setIsOpen(d)
    return d
  }
  const variants = {
    open: { gridTemplateColumns: '19rem 1fr' },
    closed: { gridTemplateColumns: '4rem 1fr' }
  }
  return (
    <Grid
      as={motion.div}
      templateAreas={`
      "nav main"
      "nav main"`}
      gridTemplateRows="1fr"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      h="200px"
      gap="1"
    >
      <GridItem h="100vh" w="100%" area="nav">
        <Stack h="inherit" w="inherit">
          <SideBar parentD={parentD} />
        </Stack>
      </GridItem>
      <GridItem h="100vh" w="100%" area="main">
        <Stack h="inherit" w="inherit">
          {children}
        </Stack>
      </GridItem>
    </Grid>
  )
}
