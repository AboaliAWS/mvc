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
                <label htmlFor="name"> name</label>
                <input type="text" className="form-control" id="name"
                       placeholder=" name" name='name' value={props.data.name} onChange={props.onChange}/>

            </div>
            <div className="form-group">
                <label htmlFor="gender">gender</label>
                <input type="text" className="form-control" id="gender"
                       placeholder="gender" name='gender' value={props.data.gender} onChange={props.onChange}/>

            </div>


            <button type="submit" className="btn btn-primary">save</button>
        </form>
    </Fragment>
);
export default Create;