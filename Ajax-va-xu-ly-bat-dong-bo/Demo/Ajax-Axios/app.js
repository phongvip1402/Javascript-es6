import axios from 'axios';
async function getTodo(id) {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    } catch (e) {
        throw new Error(e);
    }
}

async function createTodo(title, body, userId) {
    try {
        return await axios.post(`https://jsonplaceholder.typicode.com/posts`, { title, body, userId }, { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
    } catch (e) {
        throw new Error(e);
    }
}

const response = await createTodo('Reactjs', 'ajax', 1);
console.log(response.data);