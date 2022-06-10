const  express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', function (req, res) {
    res.send('Hello world Node Js using Heroku!');
});

app.listen(port, () => {
    console.info('Aplication running Node Js using Heroku!');
});