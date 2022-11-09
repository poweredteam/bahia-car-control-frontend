import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import Layout from 'components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
