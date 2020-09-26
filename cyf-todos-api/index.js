const express = require('express');
const shortid = require('shortid');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let todos = [
    { id: shortid.generate(), todo: 'Learn Node.JS', completed: false },
    { id: shortid.generate(), todo: 'Cook dinner', completed: false }
];

app.get('/', (req, res) => {
    res.send('CYF Todos API');
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todoValue = req.body.todo;

    if (todoValue) {
        const newId = shortid.generate();
        const newTodoItem = { id: newId, todo: todoValue, completed: false };
        todos.push(newTodoItem);
        res.send('Todo created!');
    } else {
        res.status(400).send('The request body is invalid');
    }
});

app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    todos = todos.filter(todo => todo.id !== todoId);
    res.send(`Todo ${todoId} has been deleted!`);
});

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const newTodoValue = req.body.todo;
    const newCompletedValue = req.body.completed;
    const todoToUpdate = todos.find(todo => todo.id === todoId);

    if (todoToUpdate) {
        if (newTodoValue) todoToUpdate.todo = newTodoValue;
        todoToUpdate.completed = !!newCompletedValue;
        return res.send(`Todo ID:${todoId} has been updated!`);
    }

    res.status(400).send('Invalid request');
});

app.listen(3000, () => {
    console.log("Server started on port 3000 and ready to accept requests!");
});