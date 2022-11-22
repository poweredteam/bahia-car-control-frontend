import { Cards, Card } from './components'
import Formcard from './components/Form/Form.home'
import { getClients } from '../../redux/slices/clients'

function Home() {
  const [text, setText] = useState('')
  const textStore = useSelector((state) => state.text.value)
  const dispatch = useDispatch()
  return (
    <div>
      <Formcard/>
      <Card />
      <Cards />
    </div>
  )
}

export default Home
