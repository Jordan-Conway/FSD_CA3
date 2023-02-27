const router = require(`express`).Router()

const carPartsSchema = require(`../models/carparts`)

router.get(`/cars`, (req, res) => 
{   
    carPartsSchema.find((error, data) => 
    {   
            res.json(data)
            
    })
})