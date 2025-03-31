const express = require("express")
const router = express.Router()
const {getClients, getClient, createClient, updateClient, deleteClient} = require('../controllers/clientController')

router.route('/').get(getClients).post(createClient)
router.route('/search').post(getClient)
router.route('/:id').put(updateClient).delete(deleteClient)

module.exports = router