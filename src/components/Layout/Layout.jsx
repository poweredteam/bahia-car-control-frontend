import { Grid, GridItem, Stack } from '@chakra-ui/react'

import SideBar from 'components/SideBar/SideBar'

export default function Layout({ children }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem h="100vh" w="100%">
        <Stack h="inherit" w="inherit">
          <SideBar />
        </Stack>
      </GridItem>
      <GridItem h="100vh" w="100%">
        <Stack>{children}</Stack>
      </GridItem>
    </Grid>
  )
}
