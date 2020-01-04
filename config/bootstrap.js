/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
var MongoClient = require('mongodb').MongoClient;

module.exports.bootstrap = async function(cb) {

  MongoClient.connect("mongodb://localhost:27017/mydb",
    function (err, db) {
      if (err) {
        console.log('Error connecting mongodb:  ' + err);
        throw err;
      } else {
        console.log('Connected to mongodb');
        console.log('db--------- >',db);
        db.listCollections().toArray(function(err, collInfos) {
console.log("collInfos----- ",collInfos);
        });
        sails.mongodb = db;
  cb();
      }
    });

};
