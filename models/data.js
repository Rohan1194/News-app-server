var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String
},
{
	versionKey: false
});

var data = mongoose.model('new', newsSchema)
module.exports= data;