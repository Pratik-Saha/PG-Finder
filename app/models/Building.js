const mongoose = require('mongoose')

const Schema = mongoose.Schema

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    }
})

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building