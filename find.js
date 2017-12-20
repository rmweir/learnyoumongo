var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo'; 

mongo.connect(url, function(err, db) {
	var findage = parseInt(process.argv[3]);
	var collection = db.collection('parrots');
	var array = collection.find({
        	age: findage 
        }).toArray(function(err, documents) {
		console.log(docutments);	 
    	});
	db.close(); 	
});
