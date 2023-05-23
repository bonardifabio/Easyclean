const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

main()
.then(console.log("MongoDB connesso"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use('/', function(req,res,next){
    console.log(req.method, req.body);
    next();
});



app.listen(process.env.PORT, function() {
    console.log("Server avviato nella porta: " + process.env.PORT);
});