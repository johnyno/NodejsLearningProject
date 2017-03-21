const express = require('express');
const routes = require('./routes/api');
const app = express();
 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongodblearning');
const db = mongoose.connection;

app.listen(process.env.port || 4000, function(){
	console.log('now listening for requests');
}); 

//setup express app



app.use('/api',routes);
