const Sequelize = require('sequelize');
const seq = require('./connection.js');

const Beat = seq.define('Beats', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    source_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    beatType_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dataStream_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

const BeatType = seq.define('BeatTypes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    repo: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

const Source = seq.define('Sources', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    uri: {
        type: Sequelize.STRING,
        allowNull: false
    },
    api_key: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

const DataStream = seq.define('DataStreams', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    entryPoint: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

module.exports = {
    Beat,
    BeatType,
    Source,
    DataStream
};