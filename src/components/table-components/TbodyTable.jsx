import React, { useEffect, useState } from 'react'
import TrRegisterTable from './TrRegisterTable'

const TbodyTable = (props) => {
    const [marcado , setMarcado] = useState ('');
    const mostrar = (aux) => {
        console.log(marcado)
        console.log(aux)
    }
    return (
        <tbody>
            {
                props.registers.map((register,index) => <TrRegisterTable seleccionado={props.seleccionado} className="tr-register-table" valor={index} key={index} register={register} setearMarcado= {setMarcado} mostrarMarcado = {mostrar} marcadoSeteado = {marcado}/> )
            }
        </tbody>
    )
}

export default TbodyTable
