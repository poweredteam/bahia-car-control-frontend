// import './styles/App.css'
import { Route } from 'wouter'
import { Home } from './pages'
import Layout from 'components/Layout'

function App() {
  return (
    <Layout>
      <Route path="/" component={Home} />
    </Layout>
  )
}

export default App
