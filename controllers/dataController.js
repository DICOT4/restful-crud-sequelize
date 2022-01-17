const {CreateData, GetData, GetAllData, UpdateData, DeleteData} = require("../db/DAOs/dataDAO");

// CREATE
exports.create = async (req, res) => {
    const data = req.body;
    const response = await CreateData(data);
    return res.status(response.statusCode).json(response);
};

// READ ONE
exports.getData = async (req, res) => {
    const dataId = req.params.id;
    const response = await GetData(dataId);
    return res.status(response.statusCode).json(response);
}

// READ ALL
exports.getAllData = async (req, res) => {
    const response = await GetAllData();
    return res.status(response.statusCode).json(response);
}

// UPDATE By Id
exports.updateData = async (req, res) => {
    const dataId = req.params.id;
    const data = req.body;
    const response = await UpdateData(dataId, data);
    return res.status(response.statusCode).json(response);
}

// DELETE By Id
exports.deleteData = async (req, res) => {
    const dataId = req.params.id;
    const response = await DeleteData(dataId);
    return res.status(response.statusCode).json(response);
}
