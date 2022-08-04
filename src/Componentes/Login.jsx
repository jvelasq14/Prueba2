import React from 'react'
import { auth, db} from '../firebase'
import {Navigate, useNavegate} from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [modoregistro, setModoregistro] = React.useState(false)
    const [error, setError] = React.useState(null)
    const guardarDatos = (e)=>{
      e.preventDefault()
      if(!email.trim()){
          setError('Ingrese Email')
          return
      }
      if(!password.trim()){
        setError('Ingrese Password')
        return
    }
      if(password.length < 6){
         setError('La contraseña debe tener minimo 6 carasteres')
         return
      }
      setError(null)
      if(modoregistro){
        registrar()
      }else{
         Login()
      }
    }
    const Login = React.useCallback(async ()=>{
            try {
              const res = await auth().signInWithEmailAndPassword(email,password)
              console.log(res.user)
            } catch (error) {
              console.log(error)
              if(error.code==='auth/wrong-password'){
                setError('La contraseña es incorrecta')
              }
              if(error.code==='auth/user-not-found'){
                  setError('Este usuario no se encuentra registrado')
              }
              if(error.code==='auth/invalid-email'){
                setError('Correo incompleto')
            }
            }
    },[email,password])
    const registrar= React.useCallback(async ()=>{
         try {
  
           const res = await auth().createUserWithEmailAndPassword(email, password)
           console.log(res.user)
           await db().collection(res.user.uid).add()
               setEmail('')
               setError(null)
               setPassword('')
               
         } catch (error) {
           console.log(error)
           if(error.code==='auth/invalid-email'){
                     setError('Correo invalido')
           }
           if(error.code==='auth/email-already-in-use'){
                     setError('Este correo ya se encuentra en uso')
           }
         }
    },[email,password,Navigate])
  return (
    <div> 
    <h3 className='text-center'>
      {
        modoregistro ? 'Registro de Usuarios' : 'Log In'
      }
      </h3>
     <div className='row justify-content-center'>
         <div className="col-12 col-sm-10 col-md-6 col-xl-4">
        
             <form onSubmit={guardarDatos}>
               {
                 error && (
                   <div className='alert alert-danger'>
                     {error}
                   </div>
                 )
               }
             
                <input type="email"
                className='form-control mb-3'
                placeholder='Ingrese su email'
                onChange={e=>setEmail(e.target.value)}
                value={email}
                 />

                <input type="password" 
                className='form-control mb-3'
                placeholder='password'
                onChange={e=>setPassword(e.target.value)}
                value={password}
                 />

                 <div className='d-grid gap-2'>
                      <button className='btn btn-dark'>
                        {
                          modoregistro ? 'Registrarse' : 'Iniciar Session'
                        }
                      </button>

                      <button className='btn btn-primary'
                      type='button'
                      onClick={()=>(setModoregistro(!modoregistro))}
                      >
                        {
                          modoregistro ? 'Ya estas registrado?' : 'No tienes cuenta?'
                        }
                      </button>
                 </div>
             </form>
             
         </div>
         
     </div>
  </div>
  )
}

export default Login