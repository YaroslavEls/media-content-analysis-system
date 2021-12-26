const { DataStream } = require('../database/models.js');

const createDataStream = async (req, res) => {
    try {
        await DataStream.create(req.body);
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('dataStream created');
}

const getDataStreams = async (req, res) => {
    const result = await DataStream.findAll();

    res.status(200).send(result);
}

const deleteDataStream = async (req, res) => {
    try {
        await DataStream.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('dataStream deleted');
}

module.exports = {
    createDataStream,
    getDataStreams,
    deleteDataStream
};