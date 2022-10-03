const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const hostname = '127.0.0.1';
const port = 3001;

// configure corrs
app.use(cors());

// consifigure the router
app.use('/api', router);

// get 
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express server of employee portal </h2>`);
});

app.listen(port.hostname, () => {
    console.log(`express server is started at http://${hostname} : ${port}`)
});
