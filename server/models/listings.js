const mongoose = require(`mongoose`)
const Item = require('./items.js')

let itemImagesSchema = new mongoose.Schema(
    {
        image:{type:String, default:""}
    }
)

let listingSchema = new mongoose.Schema(
    {
        itemId:{type: String},
        price:{type:Number, match:/^\d+$/},
        quantity:{type:Number, match:/^\d+$/},
        itemImages:[itemImagesSchema]
    },
    {
        collection: `carParts`
    }
)

module.exports = mongoose.model(`listings`, listingSchema)