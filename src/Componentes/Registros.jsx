import React from 'react'
import { db } from '../firebase'
const Registros = () => {
const [nombre,setNombre]=React.useState("")
const [cargo,setCargo]=React.useState("")
const [sede,setSede]=React.useState("")
const [lugar,setLugar]=React.useState("")
const [servicio,setServicio]=React.useState("")
const [fechaIn,setFechaIn]=React.useState("")
const [horaIn,setHoraIn]=React.useState("")
const [paciente,setPaciente]=React.useState("")
const [identificacion,setIdentificacion]=React.useState("")
const [aseguradora,setAseguradora]=React.useState("")
const [edad,setEdad]=React.useState("")
const [sexo,setSexo]=React.useState("")
const [antecedentesP,setAntecedentesP]=React.useState("")
const [descripcion,setDescripcion]=React.useState("")
const [acciones,setAcciones]=React.useState("")
const [fechaR,SetFechaR]=React.useState("")
const [lista,setLista]=React.useState([])
const [error,setError]=React.useState(null)
React.useEffect(()=>{
const obtenerDatos= async()=>{
try {
            
    const data = await db().collection('usuarios').get()
    const ArryData = data.docs.map(doc=>({
    id: doc.id, ...doc.data()}))
    setLista(ArryData)
   } catch (error) {
     console.log(error)
   }
 }
  obtenerDatos()
},[])
const guardarDatos=async(e)=>{
    e.preventDefault()
    if(!nombre.trim()){
        setError('Rellene el campo')
        return
      }
      if(!fechaR.trim()){
        setError('Rellene el campo')
        return
      }
      if(!cargo.trim()){
        setError('Rellene el campo')
        return
      }
      if(!sede.trim()){
        setError('Rellene el campo')
        return
      }
      if(!lugar.trim()){
        setError('Rellene el campo')
        return
      }
      if(!servicio.trim()){
        setError('Rellene el campo')
        return
      }
      if(!fechaIn.trim()){
        setError('Rellene el campo')
        return
      }
      if(!horaIn.trim()){
        setError('Rellene el campo')
        return
      }
      if(!paciente.trim()){
        setError('Rellene el campo')
        return
      }
      if(!identificacion.trim()){
        setError('Rellene el campo')
        return
      }
      if(!aseguradora.trim()){
        setError('Rellene el campo')
        return
      }
      if(!edad.trim()){
        setError('Rellene el campo')
        return
      }
      if(!sexo.trim()){
        setError('Rellene el campo')
        return
      }
      if(!antecedentesP.trim()){
        setError('Rellene el campo')
        return
      }
      if(!descripcion.trim()){
        setError('Rellene el campo')
        return
      }
      if(!acciones.trim()){
        setError('Rellene el campo')
        return
      }
      try {
        const nuevoUsuario = {nombre,cargo,sede,lugar,servicio,fechaIn,horaIn,paciente,identificacion,aseguradora,edad,sexo,antecedentesP,descripcion,acciones}
        const dato = await db().collection('usuarios').add(nuevoUsuario)
         setLista([
           ...lista,{...nuevoUsuario,id: dato.id}
         ])
         setNombre('')
         setCargo('')
         setSede('')
         setLugar('')
         setServicio('')
         setHoraIn('')
         setFechaIn('')
         setPaciente('')
         setIdentificacion('')
         setAseguradora('')
         setEdad('')
         setSexo('')
         setAntecedentesP('')
         setDescripcion('')
         setAcciones('')
         SetFechaR('')
         setError('')
      } catch (error) {
        console.log(error)
      }
}
  return (
    
    <div>

       <div>
<button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     Insertar
</button>
<div class="modal" tabindex="-1" id="staticBackdrop" name="modalInsert" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="col-lg-12">
          <div class="card ">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="fal fa-qrcode fa-3x"></i>
              </div>
              <h3 class="card-title">Nuevo incidente y evento adverso</h3>
            </div>
            <div class="card-body ">
              <form id="formInsert" onSubmit={guardarDatos}>
              {
                error && (<div className='alert alert-danger'>
                       {error}
                </div>)
              }
                <div class="modal-body">

                  <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Nombre del reportante"
                        onChange={(e)=>{setNombre(e.target.value)}}
                        value={nombre}
                        />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="text" 
                         class="form-control"
                         placeholder="Cargo"
                         onChange={(e)=>{setCargo(e.target.value)}}
                         value={cargo}
                         />
                    </div>
                  </div>

                  <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text"
                         class="form-control"
                         placeholder="Sede"
                         onChange={(e)=>{setSede(e.target.value)}}
                         value={sede}
                         />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="text"
                         class="form-control"
                         placeholder="Lugar"
                         onChange={(e)=>{setLugar(e.target.value)}}
                         value={lugar}
                         />
                    </div>
                  </div>

                  <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text" 
                        class="form-control"
                        placeholder="Servicio"
                        onChange={(e)=>{setServicio(e.target.value)}}
                        value={servicio}
                        />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="date" 
                        class="form-control"
                        placeholder="Fecha del incidente"
                        onChange={(e)=>{setFechaIn(e.target.value)}}
                        value={fechaR}
                        />
                    </div>
                  </div>

                  <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text"
                         class="form-control"
                         placeholder="Hora del incidente"
                         onChange={(e)=>{setHoraIn(e.target.value)}}
                         value={horaIn}
                         />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="date" 
                        class="form-control"
                        placeholder="Fecha del reporte"
                        onChange={(e)=>{SetFechaR(e.target.value)}}
                        value={fechaR}
                        />
                    </div>
                  </div>
                  <br/>
                  <hr />
                  <h3>Informacion Captura</h3>
                  <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text"
                         class="form-control"
                         placeholder="Nombre del paciente"
                         onChange={(e)=>{setPaciente(e.target.value)}}
                         value={paciente}
                         />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="text" 
                        class="form-control"
                        placeholder="identificacion"
                        onChange={(e)=>{setIdentificacion(e.target.value)}}
                        value={identificacion}
                        />
                    </div>
                  </div>

                  <div class="row  pb-2">
                    <div class="row col-md-12">
                      <div class=" col-md-12">
                        <input type="text"
                         class="form-control"
                         placeholder="Aseguradora"
                         onChange={(e)=>{setAseguradora(e.target.value)}}
                         value={aseguradora}
                         />
                      </div>
                    </div>
                  </div>
                
        <div class="row  pb-2">
                    <div class="row col-md-6">
                      <div class=" col-md-12">
                        <input type="text" 
                        class="form-control"
                        placeholder="Edad"
                        onChange={(e)=>{setEdad(e.target.value)}}
                        value={edad}
                        />
                      </div>
                    </div>

                    <div class="row col-md-6">
                        <input type="text" 
                        class="form-control" 
                        placeholder="Sexo"
                        onChange={(e)=>{setSexo(e.target.value)}}
                        value={sexo}
                        />
                    </div>
                  </div>
                  <div class="row  pb-2">
                  <div class="row col-md-12">
                      <div class=" col-md-12">
          <textarea 
          class="form-control" 
          rows="3"
          placeholder="Antecedentes patologicos"
          onChange={(e)=>{setAntecedentesP(e.target.value)}}
          value={antecedentesP}
          />
        </div>
        </div>
        </div>
                  <br/>
                  <hr />
                  <h3>Descripcion del incidente</h3>
                  <div class="row  pb-2">
                  <div class="row col-md-12">
                      <div class=" col-md-12">
          <textarea 
          class="form-control"
           rows="3"
           placeholder="Descripcion de lo ocurrido"
           onChange={(e)=>{setDescripcion(e.target.value)}}
           value={descripcion}
           />
        </div>
        </div>
        </div>
        <div class="row  pb-2">
                  <div class="row col-md-12">
                      <div class=" col-md-12">
          <textarea
           class="form-control"
           rows="3"
           placeholder="Acciones inseguras"
           onChange={(e)=>{setAcciones(e.target.value)}}
           value={acciones}
           />
        </div>
        </div>
        </div>
                  <br />

                </div>
                <div class="card-footer">
                  
                  <div class="row">
                    <button type="submit" class="btn btn-primary" id="buttonInsert" data-bs-dismiss="modal">AGREGAR</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

       </div>

        <h2>Incidentes</h2>
            
              
       
        
<table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre Reportante</th>
      <th scope="col">Cargo</th>
      <th scope="col">Sede</th>
      <th scope="col">Paciente Incidente</th>
      <th scope="col">Fecha</th>
      <th scope="col">Descripcion Incidente</th>
    </tr>
  </thead>
  <tbody>
    {

           
            lista.map((elemento)=>(
                
            <tr>
                <th>{elemento.nombre}</th>
                <td>{elemento.cargo}</td>
                <td>{elemento.sede}</td>
                <td>{elemento.paciente}</td>
                <td>{elemento.fechaIn + " " + elemento.horaIn}</td>
                <td>{elemento.descripcion}</td>
            </tr>
                
            ))
        
    }


  </tbody>
</table>
         
      
             
    </div>
  )
}

export default Registros