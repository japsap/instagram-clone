const { Schema, model, default: mongoose } = require('mongoose');


const PhotoSchema = new Schema({
    image: {
        type : String,
        required : true,
        minLength: [6, 'Image is too small to be put']
    },
    description :{
        type: String,
        required : true,
        minLength: [6, 'Description is too small']
        
    },
    owner : {
        type: mongoose.Types.ObjectId,
        id: Number
    }
})


const Photo = model('Photo', PhotoSchema);

module.exports = Photo