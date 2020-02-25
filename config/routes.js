const express = require('express')
const router = express.Router()

const BuildingController = require('../app/controllers/BuildingController')
const RoomController = require('../app/controllers/RoomController')
const TenantController = require('../app/controllers/TenantController')

router.get('/buildings', BuildingController.list)
router.post('/buildings', BuildingController.create)
router.get('/buildings/:id', BuildingController.show)
router.put('/buildings/:id', BuildingController.update)
router.delete('/buildings/:id', BuildingController.destroy)

router.get('/rooms', RoomController.list)
router.post('/rooms', RoomController.create)
router.get('/rooms/:id', RoomController.show)
router.put('/rooms/:id', RoomController.update)
router.delete('/rooms/:id', RoomController.destroy)

router.get('/tenants', TenantController.list)
router.post('/tenants', TenantController.create)
router.get('/tenants/:id', TenantController.show)
router.put('/tenants/:id', TenantController.update)
router.delete('/tenants/:id', TenantController.destroy)

module.exports = router