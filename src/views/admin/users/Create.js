import React, {Fragment} from "react";



const Create = (props) => (
    <Fragment>
        <form onSubmit={props.Store}>
            <div className="form-group">
                <label htmlFor="email">Email </label>
                <input type="email" className="form-control" id="email"
                       placeholder="Enter email" name='email' value={props.data.email} onChange={props.onChange}/>

            </div>
            <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input type="text" className="form-control" id="first_name"
                       placeholder="First name" name='first_name' value={props.data.first_name} onChange={props.onChange}/>

            </div>
            <div className="form-group">
                <label htmlFor="last_name">last name</label>
                <input type="text" className="form-control" id="last_name"
                       placeholder="last name" name='last_name' value={props.data.last_name} onChange={props.onChange}/>

            </div>
            <div className="form-group">
                <label htmlFor="avatar">avatar</label>
                <input type="text" className="form-control" id="avatar"
                       placeholder="avatar" name='avatar' value={props.data.avatar} onChange={props.onChange}/>

            </div>


            <button type="submit" className="btn btn-primary">save</button>
        </form>
    </Fragment>
);
export default Create;