var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
        var firstname = process.argv[2];
	var lastname = process.argv[3];
        
	var insertme = { firstName : firstname,
		lastName : lastname };
	
	var collection = db.collection('docs');
        collection.insert(insertme, function(err, data) {
		if(err)
			console.log("there was an error");
		else
			console.log(JSON.stringify(insertme));
	});
	
db.close();  
});
