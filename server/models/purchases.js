const mongoose = require('mongoose')
const Item = require('./items.js')

//TODO add regexes to ensure valid data

let purchaseSchema = new mongoose.Schema(
    {
        purchaseId:{type:String},
        purchaseDate:{type:Date},
        purchaseStatus:{type:String, enum:['paid', "dispatched", "arrived", "cancelled"]},
        items: [
            [{
                itemId:{type: String}, 
                itemPrice:{type: Number, match:/^\d+$/}, 
                quantity:{type:Number, match:/^\d+$/}
            }]
        ]
    }
)

module.exports = mongoose.model(`purchases`, purchaseSchema)