import React, {Fragment} from "react";



const Index = (props) => (
    <Fragment>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">avatar</th>
                <th scope="col">action</th>
            </tr>
            </thead>
            <tbody>
            {console.log(props.data)}
            {
                props.data.map((user, idx) => {
                    return <tr>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>
                            <div class="btn-group">
                                <button className="btn btn-warning" onClick={() => { console.log(user.id) }}>Edit</button>
                                <button className="btn btn-warning" onClick={() => { console.log(user.id) }}>Delete</button>
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </Fragment>
);
export default Index;