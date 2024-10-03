/**
 * Modelos_SizeRoutes.js
 * @description :: CRUD API routes for Modelos_Size
 */

const express = require('express');
const router = express.Router();
const Modelos_SizeController = require('../../../controller/device/v1/Modelos_SizeController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');

router.route('/device/api/v1/modelos_size/create').post(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.addModelos_Size);
router.route('/device/api/v1/modelos_size/list').post(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.findAllModelos_Size);
router.route('/device/api/v1/modelos_size/count').post(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.getModelos_SizeCount);
router.route('/device/api/v1/modelos_size/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.getModelos_Size);
router.route('/device/api/v1/modelos_size/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.updateModelos_Size);    
router.route('/device/api/v1/modelos_size/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.partialUpdateModelos_Size);
router.route('/device/api/v1/modelos_size/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.softDeleteModelos_Size);
router.route('/device/api/v1/modelos_size/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.softDeleteManyModelos_Size);
router.route('/device/api/v1/modelos_size/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.bulkInsertModelos_Size);
router.route('/device/api/v1/modelos_size/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.bulkUpdateModelos_Size);
router.route('/device/api/v1/modelos_size/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.deleteModelos_Size);
router.route('/device/api/v1/modelos_size/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,Modelos_SizeController.deleteManyModelos_Size);

module.exports = router;
