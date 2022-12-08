const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;
  const userExists = users.find(user => user.username === username);
  if(!userExists) return response.status(404).json({  error: 'Usuário não encontrado'});

  request.user = userExists;
  next(); 
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;
 
  const userExists = users.find(user => user.username === username);
  if(userExists) return response.status(400).json({ error: "Usuário já existe!"});

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const {user} = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const {title, deadline } = request.body;
  const { user } = request;

  const index = users.findIndex(obj => obj.username === user.username);
 
  user.todos.push({
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  });

  users[index] = user

  return response.status(200).json(user.todos);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const {title, deadline} = request.body;
  const todoId = request.params;

  user.todos = user.todos.map(todo => {
    if(todo.id === todoId){
      user.title = title,
      user.deadline = deadline
    }
    return todo;
  });

  const index = users.findIndex(u => u.id === user.id);
  users[index] = user;
 
  return response.json({});
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const todoId = request.params;

  user.todos = user.todos.map(todo => {
    if(todo.id === todoId){
      user.done = true
    }
    return todo;
  });

  const index = users.findIndex(u => u.id === user.id);
  users[index] = user;
 
  return response.json({});
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const {user} = request;
  const todoId = request.params;

  const index = users.filter(u => u.id === user.id);
  if(!index) return response.status(404).json({ error: 'Todo não localizado, não é possível realizar a exclusão.' })
  users.splice(index, 1);
 
  return response.status(204);
});

module.exports = app;
