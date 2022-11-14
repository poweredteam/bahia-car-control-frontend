import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Layout from 'components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Box bg="#E2E8F0" width="100%" height="100vh" paddingInlineStart={0}>
        <Outlet />
      </Box>
    </Layout>
  )
}

export default App
