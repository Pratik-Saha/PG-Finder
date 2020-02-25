const mongoose = require('mongoose')

const setupDB = () => {
    //DB configuraton
    mongoose.connect('mongodb://localhost:27017/pg-finder', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connected to dB')
    })
    .catch((err) => {
        console.log(err)
        
    })
}

module.exports = setupDB