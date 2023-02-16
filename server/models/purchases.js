const mongoose = require('mongoose')
const Item = require('./items.js')

let purchaseSchema = new mongoose.Schema(
    {
        purchaseId:{type:String},
        purchaseData:{type:Date},
        purchaseStatus:{type:String, enum:['paid', "dispatched", "arrived", "cancelled"]},
        items:{type:Map, of:Object}
    }
)