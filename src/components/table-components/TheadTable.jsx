import React from 'react'
import TrTable from './TrTitlesTable'

const TheadTable = (props) => {
    return (
        <thead>
            <TrTable titles = {props.titles}/>
        </thead>
    )
}

export default TheadTable
