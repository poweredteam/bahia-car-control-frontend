// import './styles/App.css'
import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import Layout from 'components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Box bg="#E2E8F0" width="100%" height="100vh" paddingInlineStart={0}>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Box>
    </Layout>
  )
}

export default App
