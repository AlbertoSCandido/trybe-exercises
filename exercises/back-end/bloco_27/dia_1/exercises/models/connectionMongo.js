const {MongoClient} = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const url = 'mongodb://127.0.0.1:27017'

let db = null;

const connection = () => {
  return db ?
    Promise.resolve(db) :
    MongoClient.connect(url, OPTIONS)
      .then(conn => {
        db = conn.db('model_example');
        return db;
      });
}

module.exports = connection;