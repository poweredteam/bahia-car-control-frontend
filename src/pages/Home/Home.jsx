<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { Cards } from './components'
import { getClients } from '../../../src/redux/slices/clients'

function Home() {
  const dispatch = useDispatch()
=======
import { Cards, Card } from './components'

function Home() {
>>>>>>> 48008d3ae4976e72cdf6063387e04cb84f4784be
  return (
    <>
      <Cards />
<<<<<<< HEAD
        <button onClick={() => dispatch(getClients())}>Traer Clientes</button>
    </>
=======
    </div>
>>>>>>> 48008d3ae4976e72cdf6063387e04cb84f4784be
  )
}

export default Home
