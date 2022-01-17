const Sequelize = require('sequelize');
const DataModel = require('./dataModel');
const config = require('../../config.json');

const connection = {};

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {...config.development.options}
)

const Data = DataModel(sequelize, Sequelize);

const Models = {Data};

const connectToDatabase = async () => {
    if (connection.isConnected) {
        // console.log('=> Using existing connection.')
        return Models;
    }
    await sequelize.sync();
    await sequelize.authenticate();
    connection.isConnected = true;
    // console.log('=> Created a new connection.')
    return Models;
}

module.exports = {connectToDatabase, sequelize};
