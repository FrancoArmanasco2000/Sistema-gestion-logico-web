import React, { useState } from 'react'
import { FaHome, FaIdBadge, FaRoute, FaCubes, FaBuilding, FaBook, FaPowerOff, FaBars, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import '../styles/Sidebar.css'



function Sidebar() {

    const [show, setShow] = useState(false)

    const controlMenu = () => {
        setShow(!show)
    }

    return (
        <div className={show ? 'sidebar active' : 'sidebar'}>
            <div className="items">
                <span className="mainhead para">
                    <h1>SGL</h1>
                </span>
            </div>
            <Link to='/home' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaHome />
                    </div>
                    <p className="para">Inicio</p>
                </li>
            </Link>
            <Link to='/account' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaIdBadge />
                    </div>
                    <p className="para">Cuenta</p>
                </li>
            </Link>
            <Link to='/routes' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaRoute />
                    </div>
                    <p className="para">Rutas</p>
                </li>
            </Link>
            <Link to='/buildings' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaBuilding />
                    </div>
                    <p className="para">Sucursales</p>
                </li>
            </Link>
            <Link to='/products' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaCubes />
                    </div>
                    <p className="para">Productos</p>
                </li>
            </Link>
            <Link to='/orders' className='sidebar-link'>
                <li className="items">
                    <div className="i">
                        <FaBook />
                    </div>
                    <p className="para">Ordenes</p>
                </li>
            </Link>
            <Link to='#' className='sidebar-link'>
                <li className="items logout-btn">
                    <div className="i">
                        <FaPowerOff />
                    </div>
                    <p className="para">Logout</p>
                </li>
            </Link>

            <div className={show ? 'toggler active' : 'toggler'}>
                <div className="toggle-bars" onClick={controlMenu}>
                    <FaBars />
                </div>
                <div className="toggle-cross" onClick={controlMenu}>
                    <FaRegArrowAltCircleLeft />
                </div>
            </div>
        </div>
    )
}


export default Sidebar
