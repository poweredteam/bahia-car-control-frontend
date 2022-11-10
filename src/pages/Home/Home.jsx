import { useDispatch } from 'react-redux'
import { Cards } from './components'
import { getClients } from '../../../src/redux/slices/clients'

function Home() {
  const dispatch = useDispatch()
  return (
    <>
      <Cards />
        <button onClick={() => dispatch(getClients())}>Traer Clientes</button>
    </>
  )
}

export default Home
