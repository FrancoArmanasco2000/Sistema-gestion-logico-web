import React from 'react'
import Thead from './TheadTable.jsx'
import TBody from './TbodyTable.jsx'

function TableDefault(props) {
  return (
    <table className='modern-table'> 
        <Thead titles={props.titles}/>
        <TBody seleccionado={props.seleccionado} registers={props.registers}/>
    </table>
  )
}

export default TableDefault
