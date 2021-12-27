const Router = require('express').Router();
const { 
    createBeat, 
    getAllBeats, 
    getBeatById,
    getBeatsByType,
    getBeatsBySource,
    getBeatsByStream,
    deleteBeat, 
    updateBeat 
} = require('../services/beat.js');

Router.route('/').get(getAllBeats);
Router.route('/').post(createBeat);

Router.route('/:id').get(getBeatById);
Router.route('/type/:id').get(getBeatsByType);
Router.route('/source/:id').get(getBeatsBySource);
Router.route('/stream/:id').get(getBeatsByStream);

Router.route('/:id').patch(updateBeat);
Router.route('/:id').delete(deleteBeat);

module.exports = Router;