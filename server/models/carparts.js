const mongoose = require(`mongoose`)

let carPhotosSchema = new mongoose.Schema(
    {
       filename:{type:String}
    })


let carPartsSchema = new mongoose.Schema(
   {
        name: {type: String},
        item_number: {type: String},
        material: {type: String},
        colour: {type: String},
        price: {type: String},
        photos:[carPhotosSchema],
        condition: {type: String} 
   },
   {
       collection: `carParts`
   })

module.exports = mongoose.model(`cars`, carPartsSchema)