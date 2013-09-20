var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

var mongoUrl = 'mongodb://miauser:mia1234@ds045588.mongolab.com:45588/mia';

var connection;


exports.allHomes = function(req, res) {
    openConnection(function(){

        connection.collection('homes', function(err, coll){
            coll.find({}).toArray(function(err, homes){
            res.send(homes);
            });
        });
    });
};

exports.findHome = function(req, res) {
    var id = req.params.id;

    openConnection(function() {
        connection.collection('homes', function(err, coll) {
            coll.findOne({"_id":new ObjectId(id)}, function(err, home){
                res.send(home);
            });
        });
    });
};



var openConnection = function(callback){

  if(typeof connection === 'undefined') {
    console.log('connection is not defined');
    mongodb.connect(mongoUrl, function(err, conn){
      if(err){
        console.log('trying again');
        mongodb.connect(mongoUrl, function(err, conn){
          if(err){
            console.log('opening a connection failed!');
            throw err;
          }
          connection = conn;
          callback();
        });
      }

      connection = conn;
      callback();
    });
  } else {
    callback();
  }
};
