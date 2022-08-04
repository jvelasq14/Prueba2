import React from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
const Navbar = (props) => {
    const navigate = useNavigate()
const cerrarSesion = ()=>{
  auth().signOut()
  .then(()=>{
    navigate("/login")
  },[navigate])
}
  return (
    <div className='navbar navbar-dark bg-primary mb-3'>
        <Link className='navbar-brand mr-3' to="/"><h2> Inicio</h2></Link>
        <div>
            <div className='d-flex'>
                <Link to="/" className='btn btn-primary mr-3 '><h5>Inicio</h5></Link>
                {
                 props.fireuser !== null ?(
                  <Link to = "/incidentes" className='btn btn-primary mr-3'><h5>Incidentes</h5></Link>
                 ) : null
                }
               
                {
                  props.fireuser !== null ?(
                    <button className='btn btn-primary mr-3'
                    onClick={()=>{cerrarSesion()}}
                    > <h5>Cerrar Sesion</h5> </button>
                  ): (<Link to="/login" className='btn btn-primary mr-3'><h5>Log in</h5> </Link>)
                }
                
            </div>
        </div>
    </div>
  )
}

export default Navbar