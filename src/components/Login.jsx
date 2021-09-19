import React, { useState } from 'react';
import { firebase } from '../firebaseconfig';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const historial = useHistory();
  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const[msgError, setMsgError] = useState(null);

  const registrarUsuario = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword( email, pass)
      .then( r => {
        historial.push('/');
      })
      .catch(e => {
      if(e.code == 'auth/invalid-email'){
        setMsgError('Formato de Email incorrecto');
      }
      if(e.code == 'auth/weak-password'){
        setMsgError('La password debe tener 6 caracteres o mas');
      }
    })
  }

  const loginUsuario = () => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then( r => {
        historial.push('/');
      })
      .catch(e => {
        if(e.code == 'auth/wrong-password'){
          setMsgError('Password incorrecta');
        }
      })
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={registrarUsuario} className="form-group">
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
        <button 
          onClick={loginUsuario}
          className="btn btn-success btn-block">Iniciar Sesion</button>
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
