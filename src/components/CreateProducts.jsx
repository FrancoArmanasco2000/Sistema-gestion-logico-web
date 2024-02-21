import React, { useEffect, useState } from 'react'
import '../styles/CreateBuildings.css'
import Axios from 'axios'

const CreateProducts = (props) => {

  const [objeto, setObjeto] = useState({});
  const [actualizado, setActualizado] = useState(false)

  const postProductos = async (aux) => {
    try {
      const url = "http://localhost:8080/productos/crear";
      const body = aux;
      const response = await Axios.post(url, body);
    } catch (error) {
      console.error(error);
    }
  }

  const crearObjeto = (event) => {
    const aux = {};
    aux.nombre = document.getElementById('nom').value;
    aux.pesoEnKg = document.getElementById('pkg').value;
    aux.precioUnitario = document.getElementById('pu').value;
    postProductos(aux);
    setObjeto(aux);
    setActualizado(true)
  }
  useEffect(() => {
    if (actualizado) {
      props.actualizar();
      setActualizado(false);
      props.ventana();
    }
  }, [actualizado]);


  return (
    <div className='container-main'>
      <label htmlFor='nom'>Nombre</label>
      <input type="text" id='nom' className='horario fromulario' required />
      <label htmlFor='pkg'>Peso En Kg</label>
      <input type="number" id='pkg' className='horario fromulario' required />
      <label htmlFor='pu'>Precio Unitario</label>
      <input type="number" id='pu' className='capacidad-maxima fromulario' required />

      <button className='crear' onClick={crearObjeto}>Crear</button>
      <button className='cancelar' onClick={props.ventana}>Cancelar</button>
    </div>
  )
}

export default CreateProducts
