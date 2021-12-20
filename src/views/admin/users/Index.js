import React, {Fragment} from "react";

const Index = (props) => (
    <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th scope="col">email</th>
                <th scope="col">name</th>
                <th scope="col">gender</th>
                <th scope="col">status</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>

            {
                props.data.map((user, idx) => {
                    return <tr key={idx}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-warning" onClick={() => {
                                    props.edit(user.id)
                                }}>Edit</button>
                                <button className="btn btn-warning" onClick={() => {
                                    props.destroy(user.id)
                                }}>Delete</button>
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </Fragment>
);
export default Index;