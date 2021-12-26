require('dotenv').config();
const express = require('express');
const server = express();
const seq = require('./database/connection.js');
const associate = require('./database/associate.js');
const beatRouter = require('./routers/beatRouter.js');
const beatTypeRouter = require('./routers/beatTypeRouter.js');
const dataStreamRouter = require('./routers/dataStreamRouter.js');
const sourceRouter = require('./routers/sourceRouter.js');

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use('/beat', beatRouter);
server.use('/beatType', beatTypeRouter);
server.use('/dataStream', dataStreamRouter);
server.use('/source', sourceRouter);

(async () => {
    associate();
    await seq.sync({ force: true });

    server.listen(3000, () => {
        console.log(`server is running on http://localhost:${process.env.PORT}/`);
    });
})();