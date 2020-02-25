const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    PAN: {
        type: String,
        required: true,
        unique: true,
        minlength: 7,
        maxlength: 15
    },
    Adhar: {
        type: Number,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant