'use strict';

var mongoDB = require("mongodb");
var assert = require("assert");
var url = "mongodb://127.0.0.1:27017/test";
var insertDocument = function(db, callback){
	db.collection("test").insertOne({
		"nombre": "Jhon",
		"apellido": "Doe",
		"edad": 27,
		"gustos": ["desaparecer", "igualdad"],
		"_id": 123
	}, function(err, result){
		assert.equal(null, err);
		console.log("Se inserto el documento con éxito");
		callback();
	});
};

mongoDB.MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	insertDocument(db, function(){
		db.close();
	});
});