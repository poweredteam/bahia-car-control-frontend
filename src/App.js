import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
    </Routes>
  )
}

export default App;
