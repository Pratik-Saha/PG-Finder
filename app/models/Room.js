const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    roomNo: {
        type: Number,
        required: true,
        minlength: 3
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: 'Building',
        required: true
    }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room