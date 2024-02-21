import React, { useEffect, useState } from 'react'
import '../styles/CreateBuildings.css'
import Axios from 'axios'

const CreateBuildings = (props) => {

  const [objeto, setObjeto] = useState({});
  const [actualizado, setActualizado] = useState(false)

  const postSucursal = async(aux) => {
    try {
      const url = "http://localhost:8080/sucursales/crear";
      const body = aux;
      const response = await Axios.post(url,body);
    } catch (error) {
      console.error(error);
    }
  }

  
  const crearObjeto = () => {
    const aux = {};
    aux.horarioApertura = document.getElementById('ha').value;
    aux.horarioCierre = document.getElementById('hc').value;
    aux.capacidadMaxima = document.getElementById('cm').value;
    aux.estado = document.getElementById('es').value;
    postSucursal(aux);
    setObjeto(aux);
    setActualizado(true)
    window.location.reload();
  }
  useEffect(()=>{
    if(actualizado){
      props.actualizar();
      setActualizado(false);
      props.ventana();
    }
  }, [actualizado]);


  return (
    <div className='container-main'>
      <label htmlFor='ha'>Horario apertura</label>
      <input type="time" id='ha' className='horario fromulario' required/>
      <label htmlFor='hc'>Horario cierre</label>
      <input type="time" id='hc' className='horario fromulario' required/>
      <label htmlFor='cm'>Capacidad maxima</label>
      <input type="number" id='cm' className='capacidad-maxima fromulario' required/>
      <label htmlFor='es'>Estado</label>
      <select id='es' className='estado fromulario' required>
        <option value="Operativo">Operativo</option>
        <option value="No operativo">No operativo</option>
      </select>
      <button className='crear' onClick={crearObjeto}>Crear</button>
      <button className='cancelar' onClick={props.ventana}>Cancelar</button>
    </div>
  )
}

export default CreateBuildings
