// import './styles/App.css'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'

function App() {
  return (
    <Box bg='#E2E8F0' width='100%' height='100vh' paddingInlineStart={0}>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Box>
  )
}

export default App
