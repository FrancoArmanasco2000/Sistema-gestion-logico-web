import React, { useEffect, useState } from 'react'
import '../styles/EditBuildings.css'
import Axios from 'axios'

const EditProducts = (props) => {

  useEffect (() => {
      cargarDatos();
  },[]);

  const cargarDatos = () => {
    console.log(props.seleccionado)
    document.getElementById('nom').value = props.seleccionado[1];
    document.getElementById('pu').value = props.seleccionado[2];
    document.getElementById('pkg').value = props.seleccionado[3];
  }

  const [nuevo, setNuevo] = useState({});

  const nuevoObjeto = () => {
    const objeto = {
      id:props.seleccionado[0],
      nombre: document.getElementById('nom').value,
      precioUnitario: document.getElementById('pu').value,
      pesoEnKg: document.getElementById('pkg').value,
    }
    setNuevo(objeto);
    setActualizadoEdit(true);
  }

  //!EDIT PRODUCTOS

  const editProductos = async () => {
    try {
      const url = "http://localhost:8080/productos/editar";
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
      editProductos();
    }
  },[actualizadoEdit])


  return (
    <div className='container-main'>
      <label htmlFor='nom'>Nombre</label>
      <input type="text" id='nom' className='horario fromulario' required/>
      <label htmlFor='pu'>Precio Unitario</label>
      <input type="number" id='pu' className='capacidad-maxima fromulario' required/>
      <label htmlFor='pkg'>Peso En Kg</label>
      <input type="number" id='pkg' className='horario fromulario' required/>
      
      <button className='editar' onClick={nuevoObjeto}>Editar</button>
      <button className='cancelar' onClick={props.ventana}>Cancelar</button>
    </div>
  )
}

export default EditProducts
