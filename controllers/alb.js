const express = require('express')
const { find } = require('../models/alb')
const router = express.Router()
const Alb = require('../models/alb')
const albData = require('../utilities/data')


router.get("/home", (req, res) => {
    res.send('Index')
})

//INDUCES ! 

//New and Edit will be handled by react! 



// //Index 
// router.get('/', (req, res) => {
//     Alb.find({}, (err, foundAlb) => {
//         res.json(foundAlb)
//     })
// })

// Index 
router.get('/', (req, res) => {
    res.send('Welcome!')
})



//Delete 
router.delete('/:id', (req, res) => {
    Alb.findByIdAndRemove(req.params.id, (err, deletedAlb) =>{
        res.json(deletedAlb)
    })
})

// Update  
router.put('/:id', (req, res) => {
    Alb.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAlb) => {
        res.json(updatedAlb)
    })
})

// Create 
router.post('/', (req, res) => {
    Alb.create(req.body, (err, createdAlb) => {
        res.json(createdAlb)
    })
})

//Show 
router.get('/:id', (req, res) => {
    Alb.findById(req.params.id, (err, foundAlbSing) => {
        res.json(foundAlbSing)
    })
})
module.exports = router 