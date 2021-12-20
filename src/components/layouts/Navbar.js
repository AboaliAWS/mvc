import {Link} from "react-router-dom";
import React, {Fragment} from "react";


const Company = (props) => (

        <Fragment>
            <nav className="btn btn-warning navbar navbar-expand-lg navheader">
                <div className="collapse navbar-collapse" >

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/users/create'} className="nav-link">Add User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">All  Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
;
export default Company;

