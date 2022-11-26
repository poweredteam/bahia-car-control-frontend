import { Text, Input } from '@chakra-ui/react'
import { useState } from 'react'
import './EditFinish.css'

function EditFinish({ state = 'Editar', tiempo, placa=0 }) {
  const fecha = new Date() // La fecha tiene que crearse y enviarla a redux con el objeto del servicio iniciado
  console.log(conductor)

  // const servicio = useSelector(state => state.services.filter(s => s.placa === placa))
  /*
  servicio = {
    clienteDNI: 455465,
    placa: 'EERR65',
    tecnico: 'rolando',
    estacion: 'bahia 3',
  }
  */

  const [inputs, setInputs] = useState({
  })

  return (
    <div className='edit-container'>
      <div className='edit-title-container'>
        <Text className='edit-title' fontSize='4xl'>{state} servicio</Text>
        {state === 'Finalizar' && <Text fontSize='2xl' className='edit-time'>Tiempo: {tiempo}</Text>}
      </div>
      <div className='edit-form-container'>
        <div className='edit-form-text'>
          <Text>Cliente: <b>{cliente}</b></Text>
          <Text>Placa: <b>{placa}</b></Text>
          <Text>Fecha de ingreso: <b>{fecha.toUTCString()}</b></Text>
        </div>
        <div className='edit-form-inputs'>
          <div className='edit-form-inputs-left'>
            <div className='edit-form-input'>
              <Text>Conductor:</Text>
              <Input width='auto' placeholder={conductor || 'Nombre y Apellido'} className='edit-form-inputs-left-conductor-input' />
            </div>
            <div className='edit-form-input'>
              <Text>Kilometraje:</Text>
              <Input width='auto' placeholder={kilometraje || '110.000'} className='edit-form-inputs-left-conductor-input' />
            </div>
          </div>
          <div className='edit-form-inputs-right'>
            <div className='edit-form-inputs-conductor'>
              <Text>Conductor:</Text>
              <Input width='auto' placeholder={conductor || 'Conductor'} className='edit-form-inputs-left-conductor-input' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFinish
