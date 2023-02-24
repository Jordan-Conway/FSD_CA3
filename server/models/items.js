const mongoose = require(`mongoose`)

//TODO add regexes to ensure valid data

let tagSchema = new mongoose.Schema(
    {
        type:String, match:/^[a-zA-Z0-9',. -]+$/
    }
)

let itemSchema = new mongoose.Schema(
    {
        itemId:{type: String},
        itemName:{type: String, match:/^[a-zA-Z0-9',. -]+$/},
        tags:[tagSchema]
    },
    {
        collection: `carParts`
    }
)

module.exports = mongoose.model(`items`, itemSchema)