const router = require(`express`).Router()

const purchaseModelSchema = require(`../models/purchases`)

router.post(`/purchase`, (req, res) => {
    purchaseModelSchema.create(req.body, (error, data)  =>{
        if(error){
            console.log(error)
        }
        res.json(data)
    })
})

module.exports = router