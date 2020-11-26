const { Router } = require('express');
const router = Router();

const getUsers = require('../controllers/get-users.controller');
const updateUser = require('../controllers/update-user.controller');
const deleteUser = require('../controllers/delete-user.controller');

const { check } = require('express-validator');
const { validateRequest } = require('../../../../app/shared/Validation');


router.get('/', getUsers);

// los middlewares van como segundo argumento 
// si es uno va solo -> (path, functionMiddleware, controller)
// si es mas de uno va en forma de array
// (path, [..middlewares], controller)


router.put('/:id', [
    check('fullname', 'Fullname is required').not().isEmpty(),
    check('role', 'Rol is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email must be a valid email').isEmail(),
    validateRequest
],
    updateUser);

router.delete('/:id', deleteUser);


module.exports = router;