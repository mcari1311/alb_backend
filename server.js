//Dependencies 
const express = require('express')
const mongoose = require('mongoose')

//new YANG
require('dotenv').config() 
const cors = require('cors')

const app = express()


 
//Enviornment Varibles
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

const db = mongoose.connection 


// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, 
    () => console.log('MongoDB connection established:', mongoURI))

// Error / Disconnection 
db.on('error', err => console.log(err.message + 'is Mongo not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middlewear
app.use(cors())
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static('public'))

//Routes 
const albController = require('./controllers/alb') 
const Alb = require('./models/alb')
app.use('/alb', albController)
const albData = require('./utilities/data')


app.get('/seed', async(req, res) => {
    await Alb.deleteMany({})
    await Alb.create(albData)
    res.send('done !') //testing
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})