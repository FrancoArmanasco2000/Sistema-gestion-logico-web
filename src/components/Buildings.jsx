import React, { useState, useEffect } from 'react'
import '../styles/InterfaceTable.css'
import TableDefault from './table-components/TableDefualt.jsx'
import CreateBuildings from './CreateBuildings.jsx'
import EditBuildings from './EditBuildings.jsx'
import Stock from './Stock.jsx'
import Axios from 'axios'


const Buildings = () => {

  const [sucursales, setSucursales] = useState();
  const [seleccionado, setSeleccionado] = useState([]);
  const [actualizado, setActualizado] = useState(false)
  const [abrirEditar, setAbrirEditar] = useState(false);
  const [abrirCrear, setAbrirCrear] = useState(false);
  const [abrirStock, setAbrirStock] = useState(false);



  //!DELETE SUCURSALES


  const deleteSucursales = async (id) => {
    try {
      const url = "http://localhost:8080/sucursales/borrar/" + id;
      const response = await Axios.delete(url);
    } catch (error) {
      console.error(error)
    }
  }

  const setearSeleccionado = (marcado) => {
    setSeleccionado(marcado);
  }

  const eliminarSeleccionado = () => {
    setActualizado(true);
    window.location.reload();
  }

  useEffect(() => {
    if (actualizado) {
      setActualizado(false);
      deleteSucursales(seleccionado[0]);
    }
  }, [actualizado])

  //!GET SUCURSALES

  const getSucursales = async () => {
    try {
      const url = "http://localhost:8080/sucursales/traerAll";
      const response = await Axios.get(url);
      const list = response.data.map(r => Object.values(r));
      const auxList = list.map(arr => {
        arr.pop();
        return arr;
      });
      setSucursales(auxList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSucursales();
  }, []);

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

  const abrirTablaStock = () => {
    if(seleccionado.length!==0) setAbrirStock(true);
  }

  const cerrarTablaStock = () => {
    setAbrirStock(false);
  }


  return (
    <>
      <h1 className='titulo-main'>Sucursales</h1>

      <div className='container-interface'>
        <div className='container-buttons'>
          <button className='create button' onClick={abrirFormularioCrear}>Crear</button>
          {abrirCrear && <CreateBuildings ventana={cerrarFormularioCrear} actualizar={getSucursales} />}
          <button className='delete' onClick={eliminarSeleccionado}>Borrar</button>
          <button className='edit' onClick={abrirFormularioEditar}>Editar</button>
          {abrirEditar && <EditBuildings ventana={cerrarFormularioEditar} seleccionado={seleccionado} />}
          <button className='stock' onClick={abrirTablaStock}>Stocks</button>
          {abrirStock && <Stock ventana={cerrarTablaStock} seleccionado={seleccionado}/>}
        </div>
        <form>
          <input className="search" type="text" placeholder="Buscar sucursal por ID" name="texto" />
        </form>
        <div className="container-table">
          <TableDefault seleccionado={setearSeleccionado} titles={['Id', 'Horario Apertura', 'Horario Cierre', 'Capacidad Maxima', 'Estado']}
            registers={sucursales ? sucursales : []} />
        </div>
      </div>
    </>
  )
}


export default Buildings


