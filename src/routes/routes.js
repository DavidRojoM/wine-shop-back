const { Router } = require('express')
const router = Router()
const winesController = require('../controllers/wines')

router.get('/', winesController.getWines)
router.get('/:id', winesController.getWine)
router.post('/', winesController.createWIne)
router.put('/:id', winesController.updateWine)
router.delete('/:id', winesController.deleteWine)

module.exports = router
