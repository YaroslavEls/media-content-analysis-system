const {
    Beat,
    BeatType,
    Source,
    DataStream
} = require('./models.js')

const associate = () => {
    // Beat.hasOne(BeatType, {
    //     foreignKey: 'beatType_id',
    //     sourceKey: 'id'
    // })
}

module.exports = associate;