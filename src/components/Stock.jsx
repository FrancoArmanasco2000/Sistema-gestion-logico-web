import React, { useState, useEffect } from 'react'
import '../styles/InterfaceTable.css'
import '../styles/Stocks.css'
import TableDefault from './table-components/TableDefualt.jsx'
import CreateStock from './CreateStock.jsx'
import Axios from 'axios'

const Stock = (props) => {

  const [stocks, setStocks] = useState();
  const [seleccionado, setSeleccionado] = useState({});
  const [actualizado, setActualizado] = useState(false)
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [abrirCrear, setAbrirCrear] = useState(false);

  useEffect(() => {
    if (props.seleccionado) {
      getStockSucursal();
      getSucursal();
    }
  }, [props.seleccionado]);

  const getStockSucursal = async() =>{
    try {
        const url = "http://localhost:8080/sucursales/stock/"+props.seleccionado[0];
        const response = await Axios.get(url);
        const list = response.data.map(r => Object.values(r)).map(r => r.map(x => (typeof x) === "object" ? x = x.nombre : x));
        setStocks(list);
    } catch (error) {
        console.log(error);
    }
  }

  const getSucursal = async() =>{
    try {
        const url = "http://localhost:8080/sucursales/traerOne/"+props.seleccionado[0];
        const response = await Axios.get(url);
        setSeleccionado(response.data)
    } catch (error) {
        console.log(error);
    }
  }

  const abrirFormularioEditar = () => {
    setAbrirEditar(true);
  }

  const cerrarFormularioEditar = () => {
    setAbrirEditar(false);
  }

  const abrirFormularioCrear = () => {
    setAbrirCrear(true);
  }

  const cerrarFormularioCrear = () => {
    setAbrirCrear(false);
  }

  return (
    <>
      <div className='container-interface-stock'>
        <div>
          <button className='agregar-stock' onClick={abrirFormularioCrear}>Agregar</button>
          {abrirCrear && <CreateStock ventana = {cerrarFormularioCrear} sucursal = {seleccionado}/>}
          <button className='delete'>Borrar</button>
          <button className='editar'>Editar</button>
          <button className='cerrar-stock' onClick={props.ventana}>X</button>
        </div>
        <form>
          <input className='search-stock' type="text" placeholder="Buscar stock por ID" name="texto" />
        </form>
        <div className="container-table">
          <TableDefault titles={['Id', 'Producto', 'Cantidad']}
            registers={stocks ? stocks : []} />
        </div>
      </div>
    </>
  )
}


export default Stock


