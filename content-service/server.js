const express = require('express');
const app = express();
app.use(express.json());
const posts = [];

app.post('/posts', (req,res)=>{
  const {author, text} = req.body;
  if(!author || !text) return res.status(400).json({error:'author and text required'});
  const p = {id: posts.length+1, author, text};
  posts.push(p);
  res.json(p);
});

app.get('/posts', (req,res) => res.json(posts));

app.listen(5000, ()=> console.log('content-service on 5000'));
