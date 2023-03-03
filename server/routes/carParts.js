const router = require(`express`).Router()

const carPartsSchema = require(`../models/carParts`)

router.get(`/cars`, (req, res) => 

{    
    carPartsSchema.find((error, data) => 
    
    {   
        console.log(res.data)
            res.json(data)
           
    })
    
})

module.exports = router