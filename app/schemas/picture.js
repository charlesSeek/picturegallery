var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  PictureSchema = new Schema({
	name:{
		unique: true,
		type: String
	},
	description: String,
	pictureSource: String,
	meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

module.exports = PictureSchema;
