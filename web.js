const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  //console.log(req.body);
  let xx = req.body.arena.state['https://cloud-run-hackathon-nodejs-5xk47kmhqq-uc.a.run.app'].x;
  let yy = req.body.arena.state['https://cloud-run-hackathon-nodejs-5xk47kmhqq-uc.a.run.app'].y;
  let dd = req.body.arena.state['https://cloud-run-hackathon-nodejs-5xk47kmhqq-uc.a.run.app'].direction;
  console.log("x is",xx);
  console.log("y is",yy);
  console.log("d is",dd);
  const moves = ['F', 'T', 'L', 'R', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T'];
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);

/* const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  //console.log(req.body);
  //console.log(req.body.arena);
  //console.log()
  //console.log(req.body.arena.state);
  //console.log(req.body.arena.state['https://foo.com'].wasHit);
  let hit = req.body.arena.state['https://cloud-run-hackathon-nodejs-5xk47kmhqq-uc.a.run.app'].wasHit;
  if (hit == true) {
    const moves = ['T'];    
    res.send(moves[Math.floor(Math.random() * moves.length)]);
  }
  else {
    const moves = ['F', 'L', 'R'];
    res.send(moves[Math.floor(Math.random() * moves.length)]);
  }
});

app.listen(process.env.PORT || 8080); */