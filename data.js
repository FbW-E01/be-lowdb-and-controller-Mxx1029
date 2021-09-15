import { Low, JSONFile } from 'lowdb';

const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

console.log("Reading in old data from database");
await db.read();

db.data = db.data || { posts: [], users: [] };

export async function writeData(data) {
    db.data = data;
    await db.write();
}

export function getData() {
    return db.data;
}

export function updatePost(id, newPost) {
    const updatedPost = newPost.body;
    updatedPost.id = id;

    const data = getData();
    data.posts = data.posts.map(p => {
        if (p.id === id) {
            p = updatedPost;
        }
        return p;
    });
    writeData(data);
}

export function deletePost(id, response) {
    const data = getData();

    let postIdToDelete = null;
    data.posts.map(p => {
        if (p.id === id) {
            postIdToDelete = id;
        }
        return p;
    })

    if (postIdToDelete) {
        data.posts = data.posts.filter(post => post.id !== id);
        response.json({ "deleted": id });
    } else {
        response.status(401);
        response.json({ "error":`Post ${id} not found. No need to delete :)`})
    }
    writeData(data);
}

export function updateUser(id, newUser) {
    const updatedUser = newUser.body;
    updatedUser.id = id;

    const data = getData();
    data.users = data.users.map(u => {
        if (u.id === id) {
            u = updatedUser;
        }
        return u;
    });
    writeData(data);
}

export function deleteUser(id, response) {
    const data = getData();
    let userIdToDelete = null;
    data.users.map(person => {
        if (person.id === id) {
            userIdToDelete = id;
        }
        return person;
    })

    if (userIdToDelete) {
        data.users = data.users.filter(entry => entry.id !== id);
        response.json({ "deleted": id });
    } else {
        response.status(401);
        response.json({ "error": `User ${id} not found. No need to delete :)`})
    }
    writeData(data);
}