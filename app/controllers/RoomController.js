const _ = require('lodash')

const Room = require('../models/Room')

module.exports.list = (req, res) => {
    Room.find().populate('building')
        .then((rooms) => {
            res.send(rooms)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = _.pick(req.body, ['roomNo', 'building'])
    const room = new Room(body)
    room.save()
        .then((room) => {
           res.json({
                room: _.pick(room, ['_id', 'roomNo', 'building']),
                notice: 'Room created successfully'
           })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Room.findById(id).populate('building')
        .then((room) => {
            if(room){
                res.json({
                    room: _.pick(room, ['_id', 'roomNo', 'building'])
                })
            }else{
                res.json({
                    notice: `Room with id ${id} does not exist`
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, ['roomNo', 'building'])
    Room.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
    .then((room) => {
        res.json({
            room: _.pick(room, ['_id', 'roomNo', 'building']),
            notice: 'Room details updated successfullys'
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Room.findByIdAndDelete(id)
        .then((room) => {
            if(room){
                res.json({
                    room: _.pick(room, ['_id', 'roomNo', 'building']),
                    notice: 'Room details deleted successfullys'
                })
            }else{
                res.json({
                    notice: `Room with id ${id} couls not found`
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

