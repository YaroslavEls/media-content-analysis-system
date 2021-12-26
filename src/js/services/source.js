const { Source } = require('../database/models.js');

const createSource = async (req, res) => {
    try {
        await Source.create(req.body);
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('source created');
}

const getSources = async (req, res) => {
    const result = await Source.findAll();

    res.status(200).send(result);
}

const deleteSource = async (req, res) => {
    try {
        await Source.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('source deleted');
}

module.exports = {
    createSource,
    getSources,
    deleteSource
};