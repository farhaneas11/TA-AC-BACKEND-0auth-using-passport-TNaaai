var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    username:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    photo:{type:String}
},{timestamps:true});

module.exports =mongoose.model('User',userSchema);