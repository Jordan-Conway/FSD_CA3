const mongoose = require('mongoose')
const Item = require('./items.js')

//TODO add regexes to ensure valid data

let itemDataSchema = new mongoose.Schema(
    {
        itemId:{type: String}, 
        itemPrice:{type: Number, match:/^\d+$/}, 
        quantity:{type:Number, match:/^\d+$/}
    }
)

let purchaseSchema = new mongoose.Schema(
    {
        purchaseId:{type:String},
        purchaseDate:{type:Date},
        purchaseStatus:{type:String, enum:['paid', "dispatched", "arrived", "cancelled"]},
        items: [itemDataSchema]
    }
)

module.exports = mongoose.model(`purchases`, purchaseSchema)