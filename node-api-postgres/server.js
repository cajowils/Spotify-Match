const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const users = require('./src/routes/users.route');
const profilepictures = require('./src/routes/profilepictures.route');
const home = require('./src/routes/home.route');
const matches = require('./src/routes/matches.route');
const profilequestions = require('./src/routes/profilequestions.route')
const spotifydata = require('./src/routes/spotifydata.route')


app.use(express.json({ limit: 1000000 }));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API, hosted on AWS Elastic Beanstalk' })
})

app.use(cors())
app.use('/users', users);
app.use('/profilepictures', profilepictures);
app.use('/home', home);
app.use('/matches', matches);
app.use('/profilequestions', profilequestions);
app.use('/spotifydata', spotifydata);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App running on port ${port}.`)
});

module.exports = server;

