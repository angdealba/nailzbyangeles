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

    const { first, last, email, phone, instagram } = req.body
    console.log(req.body)
    if(!first || !last || !email || !phone){
        res.status(400)
        throw new Error("Please add all fields")
    }

    const userExists = await Clients.findOne({ email })
    if(userExists) {
        res.status(400)
        throw new Error("Client already exists")
    }

    const client = await Clients.create({first, last, email, phone, instagram})
    if (client) {
        res.status(201).json({
            _id: client.id,
            first_name: client.first,
            last_name: client.last,
            email: client.email,
            phone: client.phone,
            instagram: client.instagram
        })
    } else {
        res.status(400)
        throw new Error('Invalid client data')
    }
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