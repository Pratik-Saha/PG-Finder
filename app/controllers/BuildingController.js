const _ = require('lodash')

const Building = require('../models/Building')

module.exports.list = (req, res) => {
    Building.find()
        .then((buildings) => {
            res.send(buildings)
        })
}

module.exports.create = (req, res) => {
    const body = _.pick(req.body, ['name', 'address', 'landmark'])
    const building = new Building(body)
    building.save()
        .then((building) => {
            res.json({
                building: _.pick(building, ['_id', 'name', 'address', 'landmark']),
                notice: 'building created successfully'
            })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Building.findById(id)
        .then((building) => {
            if(building){
                res.json({
                    building: _.pick(building, ['_id', 'name', 'address', 'landmark']),
                    notice: 'Building successfully created'
                })
            }else{
                res.json({
                    notice: 'No building available with this Id'
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, ['name', 'address', 'landmark'])
    Building.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    })
    .then((building) => {
        res.json({
            building: _.pick(building, ['_id', 'name', 'address', 'landmark']),
            notice: 'Building details successfully updated'
        })
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Building.findByIdAndDelete(id)
        .then((building) => {
            if(building){
                res.json({
                    building: _.pick(building, ['_id', 'name', 'address', 'landmark']),
                    notice: 'Building deleted successfully'
                }) 
            }else{
                res.json({
                    notice: `Building with Id ${id} does not exists`
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}