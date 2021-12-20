import React, {useEffect, useState} from 'react';
import Users from "../../models/Users";
import Index from "../../views/admin/users/Index";
import Create from "../../views/admin/users/Create";
import {useNavigate, useParams} from "react-router-dom";
import swal from "sweetalert";


let route = '/users';
let alert = 'user';
let model = Users;
let initialData={
    id: null,
    email: "",
    name: "",
    gender: "",
    status: 'active'
};

//index
export const All = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        allData();
    }, []);

    const allData = () => {
        model.all()
            .then(response => {
                setData(response.data.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    //edit page
    const edit = (id) => {
        navigate(`${route}/edit/` + id);
    };
    //delete
    const destroy = (id) => {
        model.destroy(id).then((result) => {
            success(`${alert} deleted successfully`);
            setData(data => data.filter((item) => item.id !== id));
        });
    };


    return (<Index data={data} edit={edit} destroy={destroy}/>)
}

//store
export const Store = () => {
    const navigate = useNavigate();
    const [row, setRow] = useState(initialData);
    const Store = (e) => {
        e.preventDefault();
        const data =
            {
                email: row.email,
                name: row.name,
                gender: row.gender,
                status: 'active'
            };
        model.store(data)
            .then((result) => {
                success(`${alert} saved successfully`)
                navigate(`${route}`);
            });
    };
    const onChange = (e) => {
        e.persist();
        setRow({...row, [e.target.name]: e.target.value});
    }
    return (<Create data={row} Store={Store} onChange={onChange}/>)
}
//update
export const Update = () => {
    const params = useParams();
    let id = params.id;
    const navigate = useNavigate();
    const [row, setRow] = useState(initialData);

    useEffect(() => {
        getRow();
    }, [])

    const getRow = () => {
        model.show(id)
            .then(response => {
                setRow(response.data.data);
                console.log(response.data.data)
            })
            .catch(e => {
                console.log(e);
            });
    };

    const update = (e) => {
        e.preventDefault();
        const data =
            {
                email: row.email,
                name: row.name,
                gender: row.gender,
                status: 'active'
            };
        model.update(id, data)
            .then((result) => {
                success(`${alert} updated successfully`)
                navigate(`${route}`);
            });

    };

    const onChange = (e) => {
        e.persist();
        setRow({...row, [e.target.name]: e.target.value});
    }
    return (<Create data={row} Store={update} onChange={onChange}/>)

}

// shared function
const success = (msg) => {
    swal({
        title: "Good job!",
        text: msg,
        icon: "success",
    });
};
