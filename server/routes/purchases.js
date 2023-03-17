const router = require(`express`).Router()

const purchaseModelSchema = require(`../models/purchases`)

router.post(`/purchase`, (req, res) => {
    for(let i=0; i<req.body.items.length; i++){
        req.body.items[i] = JSON.parse(req.body.items[i])
    }
    purchaseModelSchema.create(req.body, (error, data)  =>{
        if(error){
            console.log(error)
        }
        res.json(data)
    })
})

module.exports = router