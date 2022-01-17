const {connectToDatabase} = require('../models');

// CREATE
module.exports.CreateData = async (dataObject) => {
    let response = {};

    try {
        const {Data} = await connectToDatabase();
        const data = await Data.create(dataObject);

        response = {
            statusCode: 201,
            message: 'Data added',
            data: data
        };
    } catch (e) {
        response = {
            statusCode: 501,
            message: 'Something went wrong',
            data: []
        };
    }

    return response;
}

// READ one by Id
module.exports.GetData = async (dataId) => {
    let response = {};
    try {
        const {Data} = await connectToDatabase();
        const data = await Data.findByPk(dataId);
        response = {
            statusCode: 200,
            message: 'Success',
            data: data ? data : null
        };
    } catch (error) {
        response = {
            statusCode: 501,
            message: 'Something went wrong',
            data: []
        };
        return response;
    }
    return response;
};

// READ all
module.exports.GetAllData = async () => {
    let response = {};
    try {
        const {Data} = await connectToDatabase();
        const data = await Data.findAll();

        response = {
            statusCode: 200,
            message: 'Success',
            data: data ? data : []
        };
    } catch (error) {
        response = {
            statusCode: 501,
            message: 'Something went wrong',
            data: []
        };
        return response;
    }
    return response;
};

// UPDATE
module.exports.UpdateData = async (dataId, dataObject) => {
    let response = {};
    try {
        const {Data} = await connectToDatabase();
        const data = await Data.update(dataObject, {
            where: {id: dataId}
        });
        response = {
            statusCode: 200,
            message: 'Data updated',
            data: data
        };
    } catch (error) {
        response = {
            statusCode: 501,
            message: 'Something went wrong',
            data: []
        };
    }
    return response;
};

// DELETE by id
module.exports.DeleteData = async (dataId) => {
    let response = {};
    try {
        const {Data} = await connectToDatabase();
        await Data.destroy({where: {id: dataId}});
        response = {
            statusCode: 200,
            message: 'Record deleted',
            data: []
        };
    } catch (error) {
        response = {
            statusCode: 501,
            message: 'Something went wrong',
            data: []
        };
    }
    return response;
};
