const mongoose = require(`mongoose`)

//TODO add regexes to ensure valid data

let itemSchema = new mongoose.Schema(
    {
        itemId:{type: Number},
        itemName:{type: String},
        tags:[{
            type:String
        }]
    }
)

module.exports = mongoose.model(`items`, itemSchema)