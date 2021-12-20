import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Fragment} from "react";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import {Store,All,Update} from './controllers/admin/UsersController';
import Admin from "./routes/Admin";
import Company from "./routes/Company";
import User from "./routes/User";
import Navbar from "./components/layouts/Navbar";
function App() {
  return (
      <Fragment>
        <BrowserRouter>
          <div className="container">
            <Navbar/>
             <br />


            {/*routes*/}

            <Admin/>
            {/*<Company/>*/}
            {/*  <User/>*/}


          </div>
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
