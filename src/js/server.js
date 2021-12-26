const express = require('express');
const server = express();
require('dotenv').config();

const seq = require('./database/connection.js');
const associate = require('./database/associate.js');

const {
    createBeat,
    getBeat
} = require('./services/beat.js');

server.use(express.urlencoded({extended: false}));
server.use(express.json());

server.get("/", (req, res) => {
    res.send('123');
});

server.post("/test", createBeat);

server.get("/qwe", getBeat);


(async () => {
    associate();
    await seq.sync();

    server.listen(3000, () => {
        console.log(`server is running on http://localhost:${process.env.PORT}/`);
    });
})();