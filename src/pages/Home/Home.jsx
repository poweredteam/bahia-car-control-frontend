import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards, Card } from './components'
import Formcard from './components/Form/Form.home'
import { getClients } from '../../redux/slices/clients'

function Home() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <Formcard/>
      {/* <Card />
      <Cards /> */}
    </div>
  )
}

export default Home
