const mongoose = require(`mongoose`)

//TODO add regexes to ensure valid data

let shippingAddressSchema = new mongoose.Schema(
    {
        line1:{type: String},
        line2:{type: String},
        city:{type: String},
        county:{type: String},
        country:{type: String},
    }
)

let userSchema = new mongoose.Schema(
    {
        username:{type: String},
        email:{type: String},
        password:{type: String},
        dateJoined:{type: Date},
        shippingAddress:[shippingAddressSchema],
        phoneNumber:{type: Number},
        purchaseIds: [{
            type: String
        }],
        profilePhotoFilename: {type:String, default:""}
    }
)

module.exports = mongoose.model(`users`, userSchema)