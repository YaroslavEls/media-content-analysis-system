const Router = require('express').Router();
const { 
    createDataStream,
    getDataStreams,
    deleteDataStream
} = require('../services/dataStream.js');

Router.route('/').get(getDataStreams);
Router.route('/').post(createDataStream);
Router.route('/:id').delete(deleteDataStream);

module.exports = Router;