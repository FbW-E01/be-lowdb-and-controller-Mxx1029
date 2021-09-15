import { getData, writeData, updatePost, deletePost } from '../data.js';

export function postsGet(req, res) {
    const data = getData();
    res.json(data.posts);
};

export function postsPost(req, res) {
    const post = req.body;
    post.id = Math.round(Math.random() * 9999999999999);

    const data = getData();
    data.posts.push(post);
    writeData(data);

    res.status(201);
    res.json(post);
}

// Skinny Controller, Fat Model
export function postsPut(req, res) {
    const id = parseInt(req.params.id);

    updatePost(id, req);

    res.json(req.body);
}

// Fat Controller, Skinny Model would be, to have all the functionality here in the backend (Controller), instead of in the database (Modell)
// this now is also:
// Skinny Controller, Fat Model
export function postsDelete(req, res) {
    const id = parseInt(req.params.id);

    deletePost(id, res);
}