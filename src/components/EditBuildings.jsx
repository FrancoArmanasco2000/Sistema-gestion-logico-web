import React, { useEffect, useState } from 'react'
import '../styles/EditBuildings.css'
import Axios from 'axios'

const EditBuildings = (props) => {

  useEffect (() => {
      cargarDatos();
  },[]);

  const cargarDatos = () => {
    console.log(props.seleccionado)
    document.getElementById('ha').value = props.seleccionado[1];
    document.getElementById('hc').value = props.seleccionado[2];
    document.getElementById('cm').value = props.seleccionado[3];
    document.getElementById('es').value = props.seleccionado[4];
  }

  const [nuevo, setNuevo] = useState({});

  const nuevoObjeto = () => {
    const objeto = {
      id:props.seleccionado[0],
      horarioApertura: document.getElementById('ha').value,
      horarioCierre: document.getElementById('hc').value,
      capacidadMaxima: document.getElementById('cm').value,
      estado: document.getElementById('es').value
    }
    setNuevo(objeto);
    setActualizadoEdit(true);
  }

  //!EDIT SUCURSALES

  const editSucursales = async () => {
    try {
      const url = "http://localhost:8080/sucursales/editar";
      const body = nuevo;
      const response = await Axios.put(url, body);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }

  const [actualizadoEdit, setActualizadoEdit] = useState(false);

  useEffect (() => {
    if(actualizadoEdit){
      setActualizadoEdit(false);
      editSucursales();
    }
  },[actualizadoEdit])


  return (
    <div className='container-main-edit'>
      <label htmlFor='ha'>Horario apertura</label>
      <input type="time" id='ha' className='horario fromulario' required />
      <label htmlFor='hc'>Horario cierre</label>
      <input type="time" id='hc' className='horario fromulario' required />
      <label htmlFor='cm'>Capacidad maxima</label>
      <input type="number" id='cm' className='capacidad-maxima fromulario' required />
      <label htmlFor='es'>Estado</label>
      <select id='es' className='estado fromulario' required>
        <option value="Operativo">Operativo</option>
        <option value="No operativo">No operativo</option>
      </select>
      <button className='editar' onClick={nuevoObjeto}>Editar</button>
      <button className='cancelar' onClick={props.ventana}>Cancelar</button>
    </div>
  )
}

export default EditBuildings
