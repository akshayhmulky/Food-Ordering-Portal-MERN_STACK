const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type:String
    }
},   
{    timestamps :true}
)
module.exports = mongoose.model('Food',cartSchema)


// To store price:
// var ItemSchema = new Schema({
//     name            : { type: String, required: true, trim: true }
//     , price             : {type: Number, get: getPrice, set: setPrice }
// });

// function getPrice(num){
//     return (num/100).toFixed(2);
// }

// function setPrice(num){
//     return num*100;
// }

// if ( req.body.price ) {
//     req.assert('price', 'Enter a price (numbers only)').regex(/^\d+(\.\d{2})?$/);
// }