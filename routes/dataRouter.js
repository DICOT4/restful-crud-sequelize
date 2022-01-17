const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

// CREATE
router.post('/', dataController.create);

// READ By Id
router.get('/:id', dataController.getData);

// READ All
router.get('/', dataController.getAllData);

// UPDATE By Id
router.put('/:id', dataController.updateData);

// DELETE By Id
router.delete('/:id', dataController.deleteData);

module.exports = router;
