const { Beat } = require('../database/models.js');

const createBeat = async (req, res) => {
    try {
        await Beat.create(req.body);
    } catch(e) {
        throw 'smth wrong while creating';
    }

    res.status(201).send('done');
}

const getBeat = async (req, res) => {
    const result = await Beat.findAll();

    res.status(201).send(result);
}

module.exports = {
    createBeat,
    getBeat
};