const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller');


router.get('/employees-list', employee.list);

router.post('/my-employees/newemployee',  employee.addEmployee);

router.delete('/employees-list/delete/:id',  employee.delete);

// router.get('/graphyees',  employee.getGraph);


module.exports = router;