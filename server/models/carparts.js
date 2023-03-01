const mongoose = require(`mongoose`)

let carPartsSchema = new mongoose.Schema(
   {
        name: {type: String},
        item_number: {type: String},
        material: {type: String},
        colour: {type: String},
        price: {type: String},
        condition: {type: String} 
   },
   {
       collection: `carParts`
   })

module.exports = mongoose.model(`cars`, carPartsSchema)