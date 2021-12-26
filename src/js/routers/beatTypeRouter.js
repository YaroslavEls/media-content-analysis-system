const Router = require('express').Router();
const { 
    createBeatType, 
    getBeatTypes, 
    deleteBeatType
} = require('../services/beatType.js');

Router.route('/').get(getBeatTypes);
Router.route('/').post(createBeatType);
Router.route('/:id').delete(deleteBeatType);

module.exports = Router;