/**
 * Base_CubeRoutes.js
 * @description :: CRUD API routes for Base_Cube
 */

const express = require('express');
const router = express.Router();
const Base_CubeController = require('../../controller/admin/Base_CubeController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');

router.route('/admin/base_cube/create').post(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.addBase_Cube);
router.route('/admin/base_cube/list').post(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.findAllBase_Cube);
router.route('/admin/base_cube/count').post(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.getBase_CubeCount);
router.route('/admin/base_cube/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.getBase_Cube);
router.route('/admin/base_cube/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.updateBase_Cube);    
router.route('/admin/base_cube/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.partialUpdateBase_Cube);
router.route('/admin/base_cube/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.softDeleteBase_Cube);
router.route('/admin/base_cube/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.softDeleteManyBase_Cube);
router.route('/admin/base_cube/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.bulkInsertBase_Cube);
router.route('/admin/base_cube/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.bulkUpdateBase_Cube);
router.route('/admin/base_cube/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.deleteBase_Cube);
router.route('/admin/base_cube/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,Base_CubeController.deleteManyBase_Cube);

module.exports = router;
