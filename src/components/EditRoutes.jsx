import React, { useEffect, useState } from 'react'
import '../styles/EditBuildings.css'
import Axios from 'axios'

const EditBuildings = (props) => {

    useEffect(() => {
        cargarDatos();
    }, []);

    const cargarDatos = () => {
        console.log(props.seleccionado)
        document.getElementById('sucu1').value = props.seleccionado[1];
        document.getElementById('sucu2').value = props.seleccionado[2];
        document.getElementById('tt').value = props.seleccionado[3];
        document.getElementById('cm').value = props.seleccionado[4];
        document.getElementById('es').value = props.seleccionado[5];
    }

    const [nuevo, setNuevo] = useState({});

    const nuevoObjeto = () => {
        const objeto = {
            id: props.seleccionado[0],
            sucursalOrigen: { id: document.getElementById('sucu1').value },
            sucursalDestino: { id: document.getElementById('sucu2').value },
            tiempoTransito: document.getElementById('tt').value,
            capacidadMaxima: document.getElementById('cm').value,
            estado: document.getElementById('es').value
        }
        setNuevo(objeto);
        setActualizadoEdit(true);
    }

    //!EDIT RUTAS

    const editRutas = async () => {
        try {
            const url = "http://localhost:8080/rutas/editar";
            const body = nuevo;
            const response = await Axios.put(url, body);
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }

    const [actualizadoEdit, setActualizadoEdit] = useState(false);

    useEffect(() => {
        if (actualizadoEdit) {
            setActualizadoEdit(false);
            editRutas();
        }
    }, [actualizadoEdit])


    return (
        <div className='container-main-edit'>
            <label htmlFor='sucu1'>ID sucursal partida</label>
            <input type="number" id='sucu1' className='capacidad-maxima fromulario' required />
            <label htmlFor='tt'>Tiempo transito</label>
            <input type="time" id='tt' className='horario-apertura fromulario' required />
            <label htmlFor='sucu2'>ID sucursal llegada</label>
            <input type="number" id='sucu2' className='capacidad-maxima formulario' required />
            <label htmlFor='cm'>Capacidad maxima</label>
            <input type="number" id='cm' className='capacidad-maxima fromulario' required />
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
