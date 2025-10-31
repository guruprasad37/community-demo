const express = require('express');
const app = express();
app.use(express.json());
const notifications = [];

app.post('/notify', (req,res) => {
  const {to, msg} = req.body;
  notifications.push({to, msg, ts: new Date()});
  console.log('Notification saved', to, msg);
  res.json({status:'queued'});
});

app.get('/notifications', (req,res) => res.json(notifications));

app.listen(5000, ()=> console.log('notify-service on 5000'));
