import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebaseconfig';

const Menu = () => {
  const historial = useHistory();
  const [usuario, setUsuario] = useState('');
  useEffect( () => {
    firebase.auth().onAuthStateChanged( u => {
      if(u) {
        setUsuario(u.email);
        console.log(u.email);
      }
    })
  }, []);

  const CerrarSesion = () => {
    firebase.auth().signOut();
    setUsuario(null);
    historial.push('/');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
          {
            !usuario ?
            (
              <Link className="nav-link" to="/login">Login</Link>
            ):
            (
              <span></span>
            )
          }
          </li>
          <li className="nav-item">
          {
            !usuario ?
            (
              <Link className="nav-link" to="/admin">Admin</Link>
            ):
            (
              <span></span>
            )
          }
          </li>
        </ul>
        {
          usuario ?
          (
            <button
              onClick={CerrarSesion}
              className="btn btn-danger">Cerrar session
            </button>
          ):
          (
            <span></span>
          )
        }
      </nav>
    </div>
  )
}

export default Menu
