import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {All, Destroy, Store, Update} from "../controllers/admin/UsersController";


const Admin = () => (

        <Routes>
            <Route path='/' element={<Navigate replace to='/users'/>}/>
            <Route path='/users' element={<All/>}/>
            <Route path='/users/create' element={<Store/>}/>
            <Route path='/users/edit/:id' element={<Update/>}/>
            {/*<Route path='/users/destroy/:id' element={<Destroy/>}/>*/}

        </Routes>
    )
;
export default Admin;