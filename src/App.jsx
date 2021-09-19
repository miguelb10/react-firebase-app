import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>  
      <div className="row">
        <div className="col">
          <h2>Formulario de usuarios</h2>
          <form className="form-group">
            <input 
              className="form-control"
              placeholder="Introdcuce el nombre"
              type="text"
            />
            <input 
              className="form-control mt-3"
              placeholder="Introdcuce el numero"
              type="text"
            />
            <input type="submit" value="Registrar" className="btn btn-dark btn-block mt-3" />
          </form>
        </div>
        <div className="col">
          <h2>Lista de tu agendas</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
