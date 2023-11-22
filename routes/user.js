const express = require('express');
const userauthentication = require('../middleware/auth')
const userController = require('../controller/user');
const expenseController = require('../controller/expense')
const router = express.Router();


router.post('/signup', userController.signup);

router.post('/login', userController.login)

router.get('/download', userauthentication.authenticate, expenseController.downloadExpenses)
module.exports = router;