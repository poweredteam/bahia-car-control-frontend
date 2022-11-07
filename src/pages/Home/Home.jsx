import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { changeText } from 'redux/slices'
import { Cards, Card } from './components'

function Home() {
  const [text, setText] = useState('')
  const textStore = useSelector((state) => state.text.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Card />
      {/* <Cards />
      <h1>{textStore}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(changeText(text))}>Change text</button> */}
    </div>
  )
}

export default Home
