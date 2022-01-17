module.exports  = (sequelize, type) => {
    return sequelize.define('data', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: type.STRING,
        }
    });
}
