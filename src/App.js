import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Fragment} from "react";
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import {Store,All} from './controllers/admin/UsersController';
function App() {
  return (
      <Fragment>
        <BrowserRouter>
          <div className="container">
            <nav className="btn btn-warning navbar navbar-expand-lg navheader">
              <div className="collapse navbar-collapse" >

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/users/create'} className="nav-link">Add User</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/users'} className="nav-link">All  Users</Link>
                  </li>
                </ul>
              </div>
            </nav> <br />
            <Routes>
              <Route exact path='/users/create' element={<Store/>} />
              <Route path='/users' element={<All/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
