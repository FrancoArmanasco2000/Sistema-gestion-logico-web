import React, { useState, useEffect } from 'react'
import '../styles/InterfaceTable.css'
import TableDefault from './table-components/TableDefualt'
import CreateProducts from './CreateProducts'
import EditProducts from './EditingProducts'
import Axios from 'axios'

const Products = () => {


  const [seleccionado, setSeleccionado] = useState([]);
  const [productos, setProductos] = useState();
  const [actualizado, setActualizado] = useState(false);

  const setearSeleccionado = (marcado) => {
    setSeleccionado(marcado);
  }

  const eliminarSeleccionado = (event) => {
    setActualizado(true);
    window.location.reload();
  }

  useEffect(() => {
    if (actualizado) {
      setActualizado(false);
      deleteProductos(seleccionado[0]);
    }
  }, [actualizado])

  const deleteProductos = async (id) => {
    try {
      const url = "http://localhost:8080/productos/borrar/" + id;
      const response = await Axios.delete(url);
    } catch (error) {
      console.error(error)
    }
  }

  const getProductos = async () => {
    try {
      const url = "http://localhost:8080/productos/traerTodos";
      const response = await Axios.get(url);
      const list = response.data.map(r => Object.values(r));
      setProductos(list);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductos();
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
      <h1 className='titulo-main'>Productos</h1>
      <div className='container-interface'>
        <div className='container-buttons'>
          <button className='create' onClick={abrirFormularioCrear}>Crear</button>
          {abrirCrear && <CreateProducts ventana={cerrarFormularioCrear} actualizar={getProductos} />}
          <button className='delete' onClick={eliminarSeleccionado}>Borrar</button>
          <button className='edit' onClick={abrirFormularioEditar}>Editar</button>
          {abrirEditar && <EditProducts ventana={cerrarFormularioEditar} seleccionado={seleccionado} />}
        </div>
        <input type='text' placeholder='Buscar producto por Nombre' className='search'></input>
        <div className="container-table">
          <TableDefault seleccionado={setearSeleccionado} titles={['Id', 'Nombre', 'Precio Unitario', 'Peso En Kilogramos']}
            registers={productos ? productos : []} />
        </div>
      </div>
    </>
  )
}

export default Products
