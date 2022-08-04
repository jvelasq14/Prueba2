import Registros from './Componentes/Registros';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Navbar from './Componentes/Navbar';
import Inicio from './Componentes/Inicio';
import Login from './Componentes/Login';
import { auth } from "./firebase";

function App() {
  const [fireuser, setFireuser] = React.useState(false)
  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      console.log(user)
      if(user){
           setFireuser(user)
      }else{
        setFireuser(null)
      }
    })
  },[])
  return fireuser!==false ? (
    <div className="container">
      <Router>
      <Navbar fireuser={fireuser}/>
    
 <div className="container">
  <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="incidentes" element={<Registros/>}/>
  </Routes>
 </div>
 </Router>
    </div>
  ):
  <p>Cargando...</p>
  ;
}

export default App;
