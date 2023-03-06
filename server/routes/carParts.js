const router = require(`express`).Router()

const carPartsSchema = require(`../models/carparts`)

router.get(`/carParts`, (req, res) => {
    carPartsSchema.find((error, data) => {
        res.json(data)
    })
})

router.post(`/carParts`, (req, res) => {
    carPartsSchema.create(req.body, (error, data) => {
        console.log(error)
        res.json(data)
    })

})

module.exports = router