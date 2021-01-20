const employeeModel = require('../models/employeeModel');
const statusMessages = require('../config/appConstants');
const { encryptPassword } = require('../helpers/password')


const findEmployee = async (req, res, next) => {
    try {
        const email = req.body.email.toLowerCase()
        const response = await employeeModel.findOne({ email })
        if (response && response.email === email) {
            res.json(statusMessages.ERROR_MSG.EMAIL_EXIST)
        }
        else {
            next()
        }
    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}

const registerEmployee = async (req, res) => {
    try {
        const employee = new employeeModel(req.body)
        employee.email = req.body.email.toLowerCase()
        const encrypt = await encryptPassword(employee.password)
        if (encrypt) {
            employee.password = encrypt
            const response = await employee.save()
            if (response) {
                statusMessages.SUCCESS_MSG.SUCCESS.data = response
                res.json(statusMessages.SUCCESS_MSG.SUCCESS)
            }
            else {

            }
        }
        else {
            res.json(statusMessages.ERROR_MSG.SOMETHING_WENT_WRONG)
        }

    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}

const loginEmployee = async (req, res) => {
    try {
        const employee = new employeeModel(req.body)
        employee.email = req.body.email.toLowerCase()
        const encrypt = await encryptPassword(employee.password)
        if (encrypt) {
            employee.password = encrypt
            const response = await employee.save()
            if (response) {
                statusMessages.SUCCESS_MSG.SUCCESS.data = response
                res.json(statusMessages.SUCCESS_MSG.SUCCESS)
            }
            else {

            }
        }
        else {
            res.json(statusMessages.ERROR_MSG.SOMETHING_WENT_WRONG)
        }

    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}

const getEmployee = async (req, res) => {
    try {
        const { id } = req.body
        const response = await employeeModel.findById({ _id: id })
        if (response && response._id === id) {
            statusMessages.SUCCESS_MSG.SUCCESS.data = response
            res.json(statusMessages.SUCCESS_MSG.SUCCESS)
        }
        else {
            res.json(statusMessages.ERROR_MSG.DATA_NOT_FOUND)
        }
    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}

const getEmployees = async (req, res) => {
    try {
        const response = await employeeModel.find()
        if (response) {
            const { _id, name } = response
            statusMessages.SUCCESS_MSG.SUCCESS.data = { _id, name }
            res.json(statusMessages.SUCCESS_MSG.SUCCESS)
        }
        else {
            res.json(statusMessages.ERROR_MSG.DATA_NOT_FOUND)
        }
    }
    catch (error) {
        statusMessages.ERROR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERROR_MSG.IMP_ERROR)
    }
}

module.exports = {
    findEmployee,
    registerEmployee,
    getEmployees,
    getEmployee,
    loginEmployee,
}