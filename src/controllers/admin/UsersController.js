import React, {useEffect, useState} from 'react';
import Users from "../../models/Users";
import Index from "../../views/admin/users/Index";
import Create from "../../views/admin/users/Create";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";

//index
export const All = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        allUsers();
    }, []);

    const allUsers = () => {
        Users.all()
            .then(response => {
                 setUsers(response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const edit = (id) => {
        navigate('/users/edit/' + id);
    };
    return (<Index data={users} edit={edit} />)
}

//store
export const Store = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: null,
        email: "",
        name: "",
        gender: "",
        status: 'active'
    });
    const Store = (e) => {
        e.preventDefault();
        const data =
            {
                email: user.email,
                name: user.name,
                gender: user.gender,
                status:'active'
            };
        console.log(data)
        Users.store(data)
            .then((result) =>{
                success('user saved successfully')
                navigate('/users');
                });
    };
    const onChange = (e) => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }
    return (<Create data={user} Store={Store} onChange={onChange}/>)
}
//update
export const Update = (props) => {
    let id=props.match.params.id;
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: null,
        email: "",
        name: "",
        gender: "",
        status: ""
    });

    useEffect(() => {
        getRow();
    }, []);
    const getRow =() => {
        Users.show(id)
            .then(response => {
                setUser(response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const Update = (e) => {
        e.preventDefault();
        const data =
            {
                email: user.email,
                name: user.name,
                gender: user.gender,
                status:'active'
            };
        console.log(data)
        Users.update(id,data)
            .then((result) =>{
                success('user updated successfully')
                navigate('/users');
            });
    };

    const onChange = (e) => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }
    return (<create data={user} Store={Update} onChange={onChange}/>)

}




const success = (msg) => {
    swal({
        title: "Good job!",
        text: msg,
        icon: "success",
    });
};
