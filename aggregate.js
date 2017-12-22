var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
        var collection = db.collection('prices');
        collection.aggregate([ {
                $match: { size: process.argv[2] }
        }, {
                $group: { _id: "avg", average: { $avg: "$price"} }
        }]).toArray( function(err, results){
                if (err)
                        throw err;
                console.log(results[0].average.toFixed(2));
		db.close();
        });

});
