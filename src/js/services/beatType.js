const { BeatType } = require('../database/models.js');

const createBeatType = async (req, res) => {
    try {
        await BeatType.create(req.body);
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('beatType created');
}

const getBeatTypes = async (req, res) => {
    const result = await BeatType.findAll();

    res.status(200).send(result);
}

const deleteBeatType = async (req, res) => {
    try {
        await BeatType.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch(e) {
        throw 'error occurred';
    }

    res.status(200).send('beatType deleted');
}

module.exports = {
    createBeatType,
    getBeatTypes,
    deleteBeatType
};