import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { changeText } from 'redux/slices'
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
      <button onClick={() => dispatch(getClients())}>Traer Clientes</button>
      <h1>{textStore}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(changeText(text))}>Change text</button>
    </div>
  )
}

export default Home
