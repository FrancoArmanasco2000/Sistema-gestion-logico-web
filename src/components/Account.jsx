import React from 'react'
import '../styles/Account.css'
import { FaUserSecret } from "react-icons/fa";

const Account = () => {
  return (
    <div className='container-account'> 
    <div className="hoyo"></div>
        <div className="container-perfil">
            <div className="image">
                <FaUserSecret className='user-secret'/>
            </div>
            <h2>SGL MEMBER</h2>
        </div>
        <div className='datos-account'>
            <p className='dato'>Nombre: UNDEFINED</p>
            <p className='dato'>Apellido: UNDEFINED</p>
            <p className='dato'>Email: UNDEFINED</p>
            <p className='dato'>Cargo: UNDEFINED</p>
            <p className='dato'>Telefono: UNDEFINED</p>
        </div>
    </div>
  )
}

export default Account
