const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { ObjectId } = require('mongodb')

const { expect } = require('chai');

const mongoConnection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

const RESULT = {
  _id: ObjectId('604cb554311d68f491ba5781'),
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
}; 

describe('Busca um filme por ID', () => {
  let connectionMock; 
  const DBServer = new MongoMemoryServer();

  before(async () => {
    
    const URLMock = await DBServer.getUri();
    
    connectionMock = await MongoClient
    .connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Quando o filme não é encontrado', async () => {

    const ID = '507f191e810c19729de860ea'
    it('Retorna um array vazio', async () => {
      const movie = await movieModel.getById(ID)
      expect(movie).to.be.an('array').that.is.empty;
    });
  });

  describe('Quando o filme é encontrado', async () => {

    before(async () => {
      await connectionMock.collection('movies').insertOne({...RESULT});
    });

    const expectedMovie = {
      _id: ObjectId('604cb554311d68f491ba5781'),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    after(async ()=> {
      await connectionMock.collection('movies').drop();
    })
    
    it('Retorna um array com um objeto contendo as propriedades do filme', async () => {
      const movie = await movieModel.getById(expectedMovie._id);
      console.log(movie);
      expect(movie).to.be.an('array');
      expect(movie).to.have.lengthOf(1);
      expect(movie[0]).to.have.property('title');
      expect(movie[0]).to.have.property('directedBy');
      expect(movie[0]).to.have.property('releaseYear');
      expect(movie[0]).to.be.deep.equal(expectedMovie);
    });
  });
});
