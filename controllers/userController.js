import { getData, writeData, updateUser, deleteUser } from '../data.js';

export const usersGet = (req, res) => {
    const data = getData();
    res.json(data.users);
};

export const usersPost = (req, res) => {
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 9999);

    const data = getData();
    data.users.push(newUser);
    writeData(data);

    res.status(201);
    res.json(newUser);
};

export const usersPut = (req, res) => {
    const id = parseInt(req.params.id);

    updateUser(id, req);

    res.json(req.body);
}

export const usersDelete = (req, res) => {
    const id = parseInt(req.params.id);

    deleteUser(id, res);
}