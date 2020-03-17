const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const port = 1134;
const app = express();

app.use('/home', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})
app.listen(port, () => console.log(`Listening on port ${port}`));