require('../models/User')


// function loginData (data, callback) {
//     User.find({
//     }).exec(function (error, rawResult) {
//         console.log('rawResultrawResultrawResultrawResultrawResult', rawResult);
        
//        return callback(null, rawResult)
//   })
// }
var MongoClient = require('mongodb').MongoClient;

 async function loginData (userData, callback) {
    // const db = await MongoClient.connect('mongodb://localhost:27017/mydb');
     console.log('userDatauserDatauserDatauserDatauserDatauserData', userData);
    //  let data1 = await db.collection('user').find({
        // name: 'Tushar'
        sails.mongodb.collection("user").insert({userData
      
      }),(function(err, response) {
        console.log('responseresponseresponseresponseresponseresponse', response);
          return callback(response)
      });

      } 

  module.exports = {
    loginData : loginData
}