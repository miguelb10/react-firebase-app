import React, { useState } from 'react';
import { firebase } from '../firebaseconfig';

const Login = () => {
  
  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const[msgError, setMsgError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword( email, pass)
      .then( r => alert('Usuario registrado'))
      .catch(e => {
      if(e.code == 'auth/invalid-email'){
        setMsgError('Formato de Email incorrecto');
      }
      if(e.code == 'auth/weak-password'){
        setMsgError('La password debe tener 6 caracteres o mas');
      }
    })
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input 
            onChange={(e) => { setEmail(e.target.value)}}
            className="form-control" 
            placeholder="Introduce el Email" 
            type="text" />
          <input 
            onChange={(e) => { setPass(e.target.value)}}
            className="form-control mt-4" 
            placeholder="Introduce la Password" 
            type="password" />
          <input className="btn btn-dark btn-block mt-4" value="Registrar Usuario" type="submit" />
        </form>
        {
          msgError != null ?
          (
            <div>
              {msgError}
            </div>

          ):
          (
            <span> </span>
          )
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login
