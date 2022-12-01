/* eslint-disable */
import { useSelector } from 'react-redux'
import { Card } from './index'
import './Cards.css'

function Cards() {
  const services = useSelector((state) => state.service.service)
  return (
    <div className="card-container">
      {services &&
        services.map((service) => (
          <Card
            key={service.vehicle_id}
            vehicle_id={service.vehicle_id}
            workstation={service.workstation}
            datetime={service.datetime}
            technician={service.technician}
            data={service.data}
          />
        ))}
    </div>
  )
}

export default Cards
