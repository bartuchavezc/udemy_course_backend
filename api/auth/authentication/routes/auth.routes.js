const { Router } = require("express");
const { check } = require("express-validator");
const createUser = require('../controllers/signup.controller');
const { validateRequest } = require("../../../../app/shared/Validation");
const { login } = require("../controllers/login.controller");

const router = Router();

router.post('/login',
    [
        check('email', 'Email is required').not().isEmpty(),
        check('email', 'Email must be a valid email').isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        validateRequest
    ],
    login);

router.post('/signup', [
    check('fullname', 'Fullname is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email must be a valid email').isEmail(),
    validateRequest
], createUser);

module.exports = router;