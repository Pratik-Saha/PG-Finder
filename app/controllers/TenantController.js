const _  = require('lodash')

const Tenant = require('../models/Tenant')

module.exports.list = (req, res) => {
    Tenant.find().populate('room')
        .then((tenants) => {
            res.send(tenants)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = _.pick(req.body, ['name', 'address', 'PAN', 'Adhar', 'room'])
    const tenant = new Tenant(body)
    tenant.save()
        .then((tenant) => {
            res.json({
                tenant: _.pick(tenant, ['_id', 'name', 'address', 'PAN', 'Adhar', 'room']),
                notice: 'Tenant created successfully'
            })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Tenant.findById(id).populate('room')
        .then((tenant) => {
            if(tenant){
                res.json({
                    tenant: _.pick(tenant, ['_id', 'name', 'address', 'PAN', 'Adhar', 'room']),
                })
            }else{
                res.json({
                    notice:  `Tenant with id ${id} does not exists`
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update =  (req, res) => {
    const id = req.params.id
    const body = _.pick(req.body, ['name', 'address', 'PAN', 'Adhar', 'room'])
    Tenant.findByIdAndUpdate(id, body,{
        new: true,
        runValidators: true
    })
    .then((tenant) => {
        if(tenant){
            res.json({
                tenant: _.pick(tenant, ['_id', 'name', 'address', 'PAN', 'Adhar', 'room']),
                notice: 'Tenant details successfully updated'
            })
        }else{
            res.json({
                notice: `Tenant with id ${id} not found`
            })
        }
    })
    .catch((err) => {
        res.json(err)
    }) 
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Tenant.findByIdAndDelete(id)
        .then((tenant) => {
            if(tenant){
                res.json({
                    tenant: _.pick(tenant, ['_id', 'name', 'address', 'PAN', 'Adhar', 'room']),
                    notice: 'Tenant details successfully deleted'
                })
            }else{
                res.json({
                    notice: `Tenant with id ${id} not found`
                }) 
            }
        })
        .catch((err) => {
            res.json(err)
        })
}