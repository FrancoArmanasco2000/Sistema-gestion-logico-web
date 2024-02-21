import React, { useEffect, useState } from 'react'
import TdTable from './TdTable'
import '../../styles/InterfaceTable.css'

const TrRegisterTable = (props) => {


  const [actualizado, setActualizado] = useState(false);

  const marcar = (valor) => {
    props.setearMarcado(valor)
    setActualizado(true)
  }

  useEffect(() => {
    if (actualizado) {
      props.seleccionado(props.register)
      setActualizado(false)
    }
  }, [actualizado])

  return (

    <tr onClick={() => marcar(props.valor)} className={props.marcadoSeteado === props.valor ? 'marcado' : ''} >
      {
        props.register.map((r, index) => < TdTable key={index} text={r} />)
      }
    </tr>
  )
}

export default TrRegisterTable
