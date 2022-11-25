import { useSelector } from 'react-redux'
import { Card } from './index'
import './Cards.css'

function Cards() {
  const services = useSelector(state => state.service.service)
  return (
    <div className='card-container'>
      {
        services && services.map(service => (
          <Card key ={ service.placa } license= { service.placa } station = { service.estacion } />
        ))
      }
    </div>
  )
}

export default Cards
