const { Beat } = require('../database/models.js');

const createBeat = async (req, res) => {
    try {
        await Beat.create(req.body);
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('beat created');
}

const getAllBeats = async (req, res) => {
    const result = await Beat.findAll();

    res.status(200).send(result);
}

const getBeatById = async (req, res) => {
    const result = await Beat.findAll({
        where: {
            id: req.params.id
        }
    });

    res.status(200).send(result);
}

const getBeatsByType = async (req, res) => {
    const result = await Beat.findAll({
        where: {
            beatType_id: req.params.id
        }
    });

    res.status(200).send(result);
}

const getBeatsBySource = async (req, res) => {
    const result = await Beat.findAll({
        where: {
            source_id: req.params.id
        }
    });

    res.status(200).send(result);
}

const getBeatsByStream = async (req, res) => {
    const result = await Beat.findAll({
        where: {
            dataStream_id: req.params.id
        }
    });

    res.status(200).send(result);
}

const updateBeat = async (req, res) => {
    try {
        await Beat.update(req.body, {
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('beat updated');
}

const deleteBeat = async (req, res) => {
    try {
        await Beat.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('beat deleted');
}

module.exports = {
    createBeat,
    getAllBeats,
    getBeatById,
    getBeatsByType,
    getBeatsBySource,
    getBeatsByStream,
    deleteBeat,
    updateBeat
};