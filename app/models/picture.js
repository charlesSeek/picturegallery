var mongoose = require('mongoose');
var PictureSchema = require('../schemas/picture');
var Picture = mongoose.model('Picture',PictureSchema);
module.exports = Picture;
