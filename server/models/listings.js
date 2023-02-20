const mongoose = require(`mongoose`)
const Item = require('./items.js')

let listingSchema = new mongoose.Schema(
    {
        item:{Item},
        price:{type:Number, match:/^\d+$/},
        quantity:{type:Number, match:/^\d+$/},
        itemImages:[
            {type:String, default:""}
        ] 
    }
)

module.exports = mongoose.model(`listings`, listingSchema)