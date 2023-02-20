const mongoose = require(`mongoose`)

//TODO add regexes to ensure valid data

let itemSchema = new mongoose.Schema(
    {
        itemId:{type: String},
        itemName:{type: String, match:/^[a-zA-Z0-9',. -]+$/},
        tags:[{
            type:String, match:/^[a-zA-Z0-9',. -]+$/
        }]
    }
)

module.exports = mongoose.model(`items`, itemSchema)