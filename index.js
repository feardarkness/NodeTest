'use strict';
var _ = require("underscore");
_.each([1, 2, 3], function(v){
	console.log(v);
});

var mongoDB = require("mongodb");
var assert = require("assert");
var url = "mongodb://127.0.0.1:27017/test";
mongoDB.MongoClient.connect(url, function(err, db){
	assert.equal(null, err);
	console.log("Conectado correctamente a la BD");
	db.close();
});