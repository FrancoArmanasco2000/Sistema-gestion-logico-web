import React, {useState, useEffect} from 'react'
import Axios from 'axios'


const CreateRoutes = (props) => {

    const [objeto, setObjeto] = useState({});
    const [actualizado, setActualizado] = useState(false)

    const postRutas = async (aux) => {
        try {
            const url = "http://localhost:8080/rutas/crear";
            const body = aux;
            const response = await Axios.post(url, body);
        } catch (error) {
            console.error(error);
        }
    }

    const crearObjeto = () => {
        const aux = {};
        aux.sucursalOrigen = { id: document.getElementById('sucu1').value };
        aux.sucursalDestino = { id: document.getElementById('sucu2').value };
        aux.tiempoTransito = document.getElementById('tt').value;
        aux.capacidadMaxima = document.getElementById('cm').value;
        aux.estado = document.getElementById('es').value;
        postRutas(aux);
        setObjeto(aux);
        setActualizado(true)
        window.location.reload();
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
            <button className='crear' onClick={crearObjeto}>Crear</button>
            <button className='cancelar' onClick={props.ventana}>Cancelar</button>
        </div>
    )
}

export default CreateRoutes
