const express = require('express')
const router = express.Router();
const { registerEmployee, loginEmployee, findEmployee, getEmployee, getEmployees } = require('../controllers/employeeController')

router.post('/registerEmployee', findEmployee, registerEmployee);

router.post('/loginEmployee', loginEmployee);

router.get('/getEmployee', getEmployee);

router.get('/getEmployees', getEmployees);

router.put('/getEmployee', getEmployee);

router.delete('/getEmployee', getEmployee);


module.exports = router