import Config  from "./Config";

const all = () => {
    return Config.get("/users");
};

const show = id => {
    return Config.get(`/users/${id}`);
};

const store = data => {
    return Config.post("/users", data);
};

const update = (id, data) => {
    return Config.put(`/users/${id}`, data);
};

const remove = id => {
    return Config.delete(`/users/${id}`);
};



export default {
    all,
    show,
    store,
    update,
    remove,
};