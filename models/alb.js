const mongoose = require('mongoose')

const albSchema = new mongoose.Schema({
    albWord: String,
    engWord: String,
    understood: Boolean
})

const Alb = mongoose.model('Alb', albSchema)

module.exports = Alb