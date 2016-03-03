'use strict';

var mongoDB = require("mongodb");
var assert = require("assert");
var url = "mongodb://127.0.0.1:27017/test";
var findRestaurants = function(db, callback){
	var cursor = db.collection("restaurants").find({
		"grades.grade": "B"
	});
	cursor.each(function(err, doc){
		assert.equal(null, err);
		if(doc != null){
			console.dir(doc);
		}else{
			callback();
		}
		
	});
};

var findRestaurantsGradeGreaterThan40 = function(db, callback){
	var cursor = db.collection("restaurants").find({
		"grades.score": {$gt: 40}
	});
	cursor.each(function(err, doc){
		assert.equal(null, err);
		if(doc != null){
			console.dir(doc);
		}else{
			callback
		}
	});
};

mongoDB.MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	findRestaurants(db, function(){
		db.close();
	});
	findRestaurantsGradeGreaterThan40(db, function(){
		db.close();
	});
});

