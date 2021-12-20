import Config  from "./Config";

const  model='/users';


const all = () => {
    return Config.get(`${model}`);
};

const show = id => {
    return Config.get(`${model}/${id}`);
};

const store = data => {
    return Config.post(`${model}`, data);
};

const update = (id, data) => {
    return Config.put(`${model}/${id}`, data);
};

const destroy = id => {
    return Config.delete(`${model}/${id}`);
};



export default {
    all,
    show,
    store,
    update,
    destroy,
};