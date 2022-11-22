import { Cards, Card } from './components'
<<<<<<< HEAD
import Formcard from './components/Form/Form.home'
import { getClients } from '../../redux/slices/clients'

function Home() {
  const [text, setText] = useState('')
  const textStore = useSelector((state) => state.text.value)
  const dispatch = useDispatch()
=======

function Home() {
>>>>>>> 48008d3ae4976e72cdf6063387e04cb84f4784be
  return (
    <div>
      <Formcard/>
      <Card />
      <Cards />
    </div>
  )
}

export default Home
