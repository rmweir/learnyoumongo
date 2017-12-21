var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo'; 

mongo.connect(url, function(err, db) {
	var findage = parseInt(process.argv[2]);
	var collection = db.collection('parrots');
	var array = collection.find({
        	age:{$gt: findage} 
        }).toArray(function(err, documents) {
		console.log(documents);	 
    		db.close();
	});
	// db.close(); 	
});
