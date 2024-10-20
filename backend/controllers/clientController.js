const asyncHandler = require('express-async-handler')
const Clients = require('../model/clientModel')

// @desc get list of all clients
// @route GET /api/clients
const getClients = asyncHandler (async (req, res) => {
    const clients = await Clients.find()
    res.status(200).json(clients)
})

// @desc create a new client profile
// @route POST /api/clients
const createClient = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Create appointment'})
})

// @desc update existing client profile
// @route PUT /api/clients/:id
const updateClient = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update client profile ${req.params.id}`})
})

// @desc delete existing client profile
// @route DELETE /api/clients/:id
const deleteClient = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete client profile ${req.params.id}`})
})



module.exports = {
    getClients, createClient, updateClient, deleteClient
}