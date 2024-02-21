import React, { useState, useEffect } from 'react'
import '../styles/InterfaceTable.css'
import TableDefault from './table-components/TableDefualt'
import CreateRutas from './CreateRoutes'
import EditRoutes from './EditRoutes'
import Axios from 'axios'

const Routes = () => {

  const [rutas, setRutas] = useState([]);
  const [seleccionado, setSeleccionado] = useState([]);
  const [actualizado, setActualizado] = useState(false)

  //!DELETE SUCURSALES


  const deleteSucursales = async (id) => {
    try {
      const url = "http://localhost:8080/rutas/borrar/" + id;
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

  //!GET RUTAS

  const getRutas = async (event) => {
    try {
      const url = "http://localhost:8080/rutas/traerAll";
      const response = await Axios.get(url);
      const list = response.data.map(r => Object.values(r)).map(r => r.map(x => (typeof x) === "object" ? x = x.id : x));
      setRutas(list);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRutas();
  }, []);

  const [abrirEditar, setAbrirEditar] = useState(false);
  const [abrirCrear, setAbrirCrear] = useState(false);

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
      <h1 className='titulo-main'>Rutas</h1>
      <div className='container-interface'>
        <div className='container-buttons'>
          <button className='create' onClick={abrirFormularioCrear}>Crear</button>
          {abrirCrear && <CreateRutas ventana={cerrarFormularioCrear} actualizar={getRutas} />}
          <button className='delete' onClick={eliminarSeleccionado}>Borrar</button>
          <button className='edit' onClick={abrirFormularioEditar}>Editar</button>
          {abrirEditar && <EditRoutes ventana={cerrarFormularioEditar} seleccionado={seleccionado} />}
        </div>
        <input type='text' placeholder='Buscar ruta por ID' className='search'></input>
        <div className="container-table">
          <TableDefault seleccionado={setearSeleccionado} titles={['Id', 'Sucursal Origen', 'Sucursal Destino', 'Tiempo transito', 'Capacidad Maxima', 'Estado']}
            registers={rutas ? rutas : []} />
        </div>
      </div>
    </>
  )
}

export default Routes
