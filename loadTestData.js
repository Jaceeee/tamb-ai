const MongoClient =  require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'tambai';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertReviews(db, function() {
    client.close();
  });
});

const insertPlaces = function(db, callback) {
  // Get places collection
  const collection = db.collection('places');
  // insert some places
  collection.insertMany([
    {id: 1, name: "Kawasan Falls", location: "Cebu", contact_number: "09171241723", type: "Ecological", posts: []},
    {id: 2, name: "Taoist Temple", location: "Cebu", contact_number: "09253451723",  type: "Religious"},
    {id: 3, name: "Maribago Resort", location: "Cebu", contact_number: "09809212323", type: "Resort"},
    {id: 4, name: "Silogan ni Gian", location: "Cebu", contact_number: "09171296723", type: "Restaurant"},
    {id: 5, name: "Plaza Independencia", location: "Cebu", contact_number: "09412241723", type: "Restaurant"}
  ], function(err, result) {
    assert.equal(err, null);
    console.log("inserted some places into the collection");
    callback(result);
  });
}

const insertUsers = function(db, callback) {
  // Get places collection
  const collection = db.collection('users');
  // insert some places
  collection.insertMany([
    {id: 1, first_name: "Juan Carlos", last_name: "Roldan", location: "Cebu", email: "anonymous@anonymous.com"},
    {id: 2, first_name: "John Caesar", last_name: "Patac", location: "Cebu", email: "anonymous2@anonymous.com"},
    {id: 3, first_name: "Paul Christian", last_name: "Kiunisala", location: "Cebu", email: "anonymous3@anonymous.com"},
    {id: 4, first_name: "Michael Loewe", last_name: "Alivio", location: "Cebu", email: "anonymous4@anonymous.com"}
  ], function(err, result) {
    assert.equal(err, null);
    console.log("inserted some users into the collection");
    callback(result);
  });
}

const insertReviews = function(db, callback) {
  const collection = db.collection('reviews');
  // insert some places
  collection.insertMany([
    {
      id: 1,
      content: "This is such an awesome place",
      rating: 5,
      user_id: 1
    },
    {
      id: 2,
      content: "Can't wait to be back",
      rating: 7,
      user_id: 3
    },
    {
      id: 3,
      content: "Very poor accommodation",
      rating: 2,
      user_id: 2
    }
  ], function(err, result) {
    assert.equal(err, null);
    console.log("inserted some reviews into the collection");
    callback(result);
  });
}
