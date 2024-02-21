import React from 'react'
import ThTable from './ThTable'

const TrTable = (props) => {
  return (
    <tr>
        {
          props.titles.map((title,index) => <ThTable key={index} text = {title} />)
        }
    </tr>
  )
}

export default TrTable
