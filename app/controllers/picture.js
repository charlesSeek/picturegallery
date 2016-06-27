var Picture = require('../models/picture');
var fs = require('fs');
var path = require('path');
exports.list = function(req,res){
	Picture.find({},function (err,pictures){
		if (err) {
			console.log(err);
			res.json({
				error:err
			})
		}
		res.json({
			pictures: pictures
		});
	})
};

exports.addPicture = function(req,res){
	var pictureObj = req.body.picture;
	var _picture = new Picture(pictureObj);
	console.log(_picture);
	console.log("begin to save picture");
	_picture.save(function(err,picture){
		console.log("save picture");
		if (err){
			concole.log(err);
			res.redirect('/');
		}
		res.redirect('/');
	});
};

exports.delete = function(req,res){
	var id = req.query.id;
	console.log(req.query);
	if (id){
		console.log("delete picture id:"+id);
		Picture.remove({_id:id},function(err,picture){
			if (err){
				console.log(err);
				res.json({success:false});
			} else {
				res.json({success:true});
			}
		})
	}
};

exports.uploaded = function(req,res,next){
	//console.log("req files:"+JSON.stringify(req.files));
	//console.log("req body:"+JSON.stringify(req.body));
	var pictureData = req.files.uploadPicture;
	var filePath = pictureData.path;
	var originalFilename = pictureData.originalFilename;
	if (originalFilename){
		fs.readFile(filePath,function(err,data){
			if (err){
				res.json({error:"read file error"});
			}
			var timestamp = Date.now();
			var fileType = pictureData.type.split('/')[1];
			var targetFilename = timestamp+"."+fileType;
			var newPath = path.join(__dirname,'../..','/public/upload/'+targetFilename);
			fs.writeFile(newPath,data,function(err){
				if (err){
					res.json({error:"write file error"});
				}
				req.body.picture.pictureSource = targetFilename;
				//console.log("req body:"+JSON.stringify(req.body));
				next();
			});
		});
	}
}