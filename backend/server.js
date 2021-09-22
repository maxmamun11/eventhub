const express = require('express'),
       path = require('path'),
       bodyParser = require('body-parser'),
       cors = require('cors')
       mongoose = require('mongoose');
       config = require('./config/DB')
       

const PORT = 3000

const api = require('./routes/api')


const app = express(); 
app.use(bodyParser.json());

app.use('/api', api)


app.use(cors());
app.get('/', function(req, res){
    res.send('Hello from server')
})
const port = process.env.PORT || 4000;


app.listen(PORT, function(){
console.log('Listening on port ' + PORT);
});
