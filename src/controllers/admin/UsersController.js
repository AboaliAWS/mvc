import React, {useEffect, useState} from 'react';
import Users from "../../models/Users";
import Index from "../../views/admin/users/Index";
import Create from "../../views/admin/users/Create";


export const All = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        allUsers();
    }, []);
    const allUsers = () => {
        Users.all()
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <Index data={users}/>
    )
}

//store
export const Store = (props) => {
    const initialTutorialState = {
        id: null,
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
    };
    const [user, setUser] = useState(initialTutorialState);


    const Store = (e) => {
        e.preventDefault();
        const data =
            {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                avatar: user.avatar
            };
        Users.store(data)
            .then((result) => {
                props.history.push('/users/index')
            });
    };
    const onChange = (e) => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (<Create data={user} Store={Store} onChange={onChange}/>)
}
