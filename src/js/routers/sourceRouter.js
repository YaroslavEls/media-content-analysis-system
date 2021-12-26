const Router = require('express').Router();
const { 
    createSource,
    getSources,
    deleteSource
} = require('../services/source.js');

Router.route('/').get(getSources);
Router.route('/').post(createSource);
Router.route('/:id').delete(deleteSource);

module.exports = Router;