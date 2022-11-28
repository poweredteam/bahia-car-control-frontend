/* eslint-disable */
import { Text, Input, Select, Textarea, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './EditFinish.css'
import { getProduct } from '../../../../redux/slices'
import { sendService, removeService } from '../../../../redux/slices/services'
import swal from 'sweetalert'

function EditFinish({ estado, timer, onClose, date, data, license, station, technician }) {
  const dispatch = useDispatch()
  const productos = useSelector(state => state.products.products)
  // traer de redux el servicio (pasar por props: estado, timer, onClose, license)
  const servicio = {
    clienteName: `${data.name} ${data.lastName}`,
    placa: license,
    tecnico: technician,
    estacion: station
  }

  // const generalInfo = {
  //   type: 'cambio',
  //   cronometer: timer,
  //   datetime: date,
  //   workstation: station,
  //   technician,
  //   kilometers: 'pte',
  //   goods: [],
  //   vehicle_id: license,
  //   driver: 'pte',
  //   comments: 'pte'
  // }

  const [inputs, setInputs] = useState({
    driver: '',
    kilometraje: '',
    productos: [],
    servicio: '',
    observaciones: ''
  })

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  function handleDeleteProduct(e) {
    e.preventDefault()
    setInputs({
      ...inputs,
      productos: inputs.productos.filter(type => type !== e.target.name)
    })
  }

  function handleSelect(e) {
    const findProd = inputs.productos.find(t => t === e.target.value)
    if (e.target.name === 'select-producto') {
      setInputs({
        ...inputs,
        productos: findProd ? [...inputs.productos] : [...inputs.productos, e.target.value]
      })
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = () => {
    if (estado === 'Finalizar') {
      swal({
        title: 'Atención',
        text: '¿Desear finalizar el Servicio?',
        icon: 'warning',
        buttons: {
          No: true,
          Si: true
        }
      }).then((value) => {
        switch (value) {
          case 'Si':
            // dispatch(sendService(generalInfo))
            // dispatch(removeService(license))
            // localStorage.removeItem(`${license}`)
            break
          case 'No':
            break
          default:
            break
        }
      })
    } else {
      // falta crear la action para modificar el servicio
    }
  }

  return (
    <div className='edit-container'>
      <div className='edit-title-container'>
        <Text className='edit-title' fontSize='4xl'>{estado} servicio</Text>
        {estado === 'Finalizar' && <Text fontSize='2xl' className='edit-time'>Tiempo: {`${timer.hours}:${timer.minutes}:${timer.seconds}`}</Text>}
      </div>
      <div className='edit-form-container'>
        <div className='edit-form-text'>
          <Text>Cliente: <b>{servicio.clienteName}</b></Text>
          <Text>Placa: <b>{servicio.placa}</b></Text>
          <Text>Fecha de ingreso: <b>{date}</b></Text>
        </div>
        <div className='edit-form-inputs'>
          <div className='edit-form-inputs-left'>
            <div className='edit-form-input'>
              <Text>Conductor:</Text>
              <Input backgroundColor={'#fff'} width='70%' placeholder={inputs.driver || 'Nombre y Apellido'} className='edit-form-inputs-left-conductor-input' name='driver' value={inputs.driver} onChange={(e) => handleSelect(e)}/>
            </div>
            <div className='edit-form-input'>
              <Text>Kilometraje:</Text>
              <Input width='70%' backgroundColor={'#fff'} placeholder={inputs.kilometraje || '110.000'} className='edit-form-inputs-left-conductor-input' name='kilometraje' value={inputs.kilometraje} onChange={(e) => handleSelect(e)}/>
            </div>
            <div className='edit-form-productos-container'>
              <div className='edit-form-productos'>
                <Text>Productos:</Text>
                <Select onChange={(e) => handleSelect(e)} name='select-producto' className='edit-form-inputs-left-conductor-input' width='50%'>
                    <option value="" disabled hidden>Productos</option>
                    {productos.map((e) => (
                      <option value={e.product} key={e._id}>{e.product}</option>
                    ))}
                </Select>
              </div>
              <div className='edit-form-selected-products'>
                {inputs.productos?.map((prod, i) => <button className='edit-form-selected-product' key={i} name={prod} onClick={(e) => handleDeleteProduct(e)}>{prod}</button>)}
              </div>
            </div>
          </div>
          {/* Servicios derecha */}
          <div className='edit-form-inputs-right'>
            <div className='edit-form-input'>
                <Text>Servicio:</Text>
                <Select onChange={(e) => handleSelect(e)} width='50%' backgroundColor={'#fff'} className='edit-form-inputs-left-conductor-input' name='servicio'>
                  <option value='Servicio 1'>Servicio 1</option>
                  <option value='Servicio 2'>Servicio 2</option>
                  <option value='Servicio 3'>Servicio 3</option>
                </Select>
            </div>
            <div className='edit-form-input'>
              <Text>Estación:</Text>
              <Select onChange={(e) => handleSelect(e)} width='50%' className='edit-form-inputs-left-conductor-input' backgroundColor={'#fff'} name='estacion'>
                <option value='Estacion 1'>Estacion 1</option>
                <option value='Estacion 2'>Estacion 2</option>
                <option value='Estacion 3'>Estacion 3</option>
              </Select>
            </div>
            <div className='edit-form-input'>
              <Text>Técnico:</Text>
              <Select onChange={(e) => handleSelect(e)} width='50%' className='edit-form-inputs-left-conductor-input' backgroundColor={'#fff'} name='tecnico'>
                <option value='Tecnico 1'>Tecnico 1</option>
                <option value='Tecnico 2'>Tecnico 2</option>
                <option value='Tecnico 3'>Tecnico 3</option>
              </Select>
            </div>
            <div className='edit-form-input-observaciones'>
              <Text>Observaciones:</Text>
              <Textarea placeholder='Agrega una aclaracion' backgroundColor={'#fff'} name='observaciones' value={inputs.observaciones} onChange={(e) => handleSelect(e)}/>
            </div>
            <div className='edit-form-input-buttons'>
              <Button marginRight={'15px'} onClick={onClose}>Cancelar</Button>
              <Button onClick={handleSubmit}>Aceptar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFinish
