const mongoose = require(`mongoose`)
const Item = require('./items.js')

let listingSchema = new mongoose.Schema(
    {
        item:{Item},
        price:{type:Number, match:/^\d+$/},
        quantity:{type:Number, match:/^\d+$/},
        itemImages:[
            {type:String, default:""}
        ],
        validateImages: [validNumImages, 'Only 10 images allowed'] 
    }
)

//Solution to validate number of images taken from https://stackoverflow.com/a/59480100
const validNumImages = (val) => {
    let validNum = true;

    val.forEach(element => {
        if(element.length > 10){
            validNum = false;
            return;
        }
    });

    return validNum;
}

module.exports = mongoose.model(`listings`, listingSchema)