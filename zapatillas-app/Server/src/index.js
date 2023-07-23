require('dotenv').config();
const { DB_PORT } = process.env;
const { connect } = require("./database/connectdb");
const routes = require('./routes/index.js');
const express = require("express");
const server = express();
const morgan = require('morgan');
// ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017

const PORT = DB_PORT || 3001;

server.use(morgan("dev"));
server.use(express.json()); 


server.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
    next();
})


//server.use('sneakersStore')

server.use("/",routes)

server.listen(PORT, () => console.log("Si sirve" * "viene de la db" + connect));