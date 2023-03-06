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

router.put(`/carParts/:id`, (req, res) => {
    carPartsSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
        res.json(data)
    })
})

router.delete(`/carParts/:id`, (req, res) => {
     carPartsSchema.findByIdAndRemove(req.params.id, (error, data) => {
        res.json(data)
    })
})

module.exports = router