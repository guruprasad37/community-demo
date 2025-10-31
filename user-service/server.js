const express = require('express');
const app = express();
app.use(express.json());
const users = [];

app.post('/register', (req, res) => {
  const {username} = req.body;
  if(!username) return res.status(400).json({error:'username required'});
  users.push({username});
  res.json({status:'ok', users});
});

app.get('/users', (req, res) => res.json(users));

app.listen(5000, ()=> console.log('user-service listening on 5000'));
