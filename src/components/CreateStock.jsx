import React, { useEffect, useState } from 'react'
import '../styles/CreateBuildings.css'
import Axios from 'axios'

const CreateStock = (props) => {

  const [nuevaSucu, setNuevaSucu] = useState({});
  const [actualizado, setActualizado] = useState(false);

  const postStock = async (aux) => {
    try {
      const url = "http://localhost:8080/stocks/crear";
      const body = aux;
      const response = await Axios.post(url, body);
      const nueva = props.sucursal;
      nueva.stocks.push(aux);
      setNuevaSucu(nueva);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(actualizado){
      actualizarSucursal(nuevaSucu);
      setActualizado(false);
    }
  },[actualizado])

  const crearObjeto = async (event) => {
    const aux = {};
    aux.producto = { id: document.getElementById('prod').value};
    aux.cantidad = document.getElementById('cant').value;
    await postStock(aux);
    setActualizado(true);
    props.ventana();  
  }

  const actualizarSucursal = async (nuevaSucursal) => {
    console.log(nuevaSucursal)
    try {
      const url = "http://localhost:8080/sucursales/editar";
      const body = nuevaSucursal;
      const response = await Axios.put(url,body);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='container-main'>
      <label htmlFor='prod'>Id Producto</label>
      <input type="number" id='prod' className='horario fromulario' required />
      <label htmlFor='cant'>Cantidad</label>
      <input type="number" id='cant' className='capacidad-maxima fromulario' required />

      <button className='agregar-stock' onClick={crearObjeto}>Agregar</button>
      <button className='cancelar' onClick={props.ventana}>Cancelar</button>
    </div>
  )
}

export default CreateStock
