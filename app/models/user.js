'use strict';

var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

// User Schema
var UserSchema = new Schema({
	email: {
		type: String,
		unique: true
	},
	referral: Number
});

mongoose.model('User', UserSchema);