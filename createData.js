var mongoose = require('mongoose');

var dbUrl = 'mongodb://127.0.0.1/gallery';
mongoose.connect(dbUrl);
mongoose.connection.on("error", function (error) {
    console.log("connect to mongodb failure：" + error);
});
mongoose.connection.on("open", function () {
    console.log("------connect to mongodb sucessfully！------");
});
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
var Picture = mongoose.model('Picture',PictureSchema);

var obj1 = new Picture({
	name: "the dark knight",
	description: "superhero action film",
	pictureSource: "darkknight.jpg"
})
obj1.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});

var obj2 = new Picture({
	name: "shutter island",
	description: "mystery psychological film",
	pictureSource: "shutterisland.jpg"
})
obj2.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});

var obj3 = new Picture({
	name: "the grey",
	description: "survival thriller film",
	pictureSource: "thegrey.jpg"
})
obj3.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});

var obj4 = new Picture({
	name: "the slience of the lambs",
	description: "psychological thriller film",
	pictureSource: "slienceoflambs.jpg"
})
obj4.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});

var obj5 = new Picture({
	name: "rescue mission",
	description: "superhero action film",
	pictureSource: "darkknight.jpg"
})
obj5.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});

var obj6 = new Picture({
	name: "looper",
	description: "superhero action film",
	pictureSourcel: "darkknight.jpg"
})
obj6.save(function(err,picture){
	if (err){
		console.log(err);
	}
	console.log("create data successfully");
});
