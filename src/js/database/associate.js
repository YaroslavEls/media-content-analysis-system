const {
    Beat,
    BeatType,
    Source,
    DataStream
} = require('./models.js')

const associate = () => {
    // BeatType.hasMany(Beat, {
    //     foreignKey: 'beatType_id',
    //     sourceKey: 'id'
    // });

    // Source.hasMany(Beat, {
    //     foreignKey: 'source_id',
    //     sourceKey: 'id'
    // });

    // DataStream.hasMany(Beat, {
    //     foreignKey: 'dataStream_id',
    //     sourceKey: 'id'
    // })
}

module.exports = associate;